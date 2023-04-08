<script lang="ts">
	import type { Todo } from './todo';
	import TodoEntry from './TodoEntry.svelte';
	import ToggleSwitch from './ToggleSwitch.svelte';

	export let todos: Todo[];

	let isEditable = false;

	function checkTodo(idx: number): () => void {
		function checkTodoAtIndex() {
			todos[idx].isFinished = !todos[idx].isFinished;
			if (todos[idx].isFinished) {
				todos[idx].finishedAt = new Date().getTime() / 1000;
			} else {
				todos[idx].finishedAt = 0;
			}
		}
		return checkTodoAtIndex;
	}

	function removeTodo(idx: number): () => Promise<void> {
		async function removeTodoAtIndex() {
			const todoID = todos[idx].id;
			todos.splice(idx, 1);
			todos = todos;

			await fetch(`/todos/${todoID}`, { method: 'DELETE' });
		}
		return removeTodoAtIndex;
	}
</script>

<div>
	<p>Wanna edit?</p>
	<ToggleSwitch bind:value={isEditable} />
</div>

{#if isEditable}
	<ul>
		{#each todos as todo, idx (todo.id)}
			<li>
				<TodoEntry {todo} editable />
				<button on:click={checkTodo(idx)}>✔️</button>
				<button on:click={removeTodo(idx)}>❌</button>
			</li>
		{/each}
	</ul>
{:else}
	<ul>
		{#each todos as todo (todo.id)}
			<li><TodoEntry {todo} /></li>
		{/each}
	</ul>
{/if}

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	ul {
		list-style: none;
	}
</style>
