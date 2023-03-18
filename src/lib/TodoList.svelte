<script lang="ts">
	import type { Todo } from './todo';
	import TodoEntry from './TodoEntry.svelte';
	import ToggleSwitch from './ToggleSwitch.svelte';

	export let todos: Todo[];

	let isEditable = false;

	function checkTodo(idx: number): () => void {
		function checkTodoAtIndex() {
			todos[idx].is_finished = !todos[idx].is_finished;
		}
		return checkTodoAtIndex;
	}

	function removeTodo(idx: number): () => void {
		function removeTodoAtIndex() {
			todos.splice(idx, 1);
			todos = todos;
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
