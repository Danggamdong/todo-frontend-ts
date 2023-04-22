<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TodoEntry from './TodoEntry.svelte';
	import type { Todo } from './todo';
	import type { NewTodoEvent, RemoveTodoEvent, UpdateTodoEvent } from './types';

	export let todos: Todo[];

	const dispatch = createEventDispatcher<{ newtodo: NewTodoEvent }>();

	function newTodo() {
		dispatch('newtodo', { title: 'New Todo', description: '' });
	}

	async function handleRemoveTodo(event: CustomEvent<RemoveTodoEvent>) {
		let target: number | undefined = undefined;
		for (const [idx, todo] of todos.entries()) {
			if (todo.id != event.detail.id) continue;
			target = idx;
		}

		if (target == undefined) return;
		todos.splice(target, 1);
		todos = todos;
		await fetch(`/todos/${event.detail.id}`, { method: 'DELETE' });
	}

	async function handleUpdateTodo(event: CustomEvent<UpdateTodoEvent>) {
		let updated: Todo | undefined = undefined;
		for (const [idx, todo] of todos.entries()) {
			if (todo.id != event.detail.id) continue;

			todos[idx].title = event.detail.title;
			todos[idx].description = event.detail.description;
			todos[idx].finishedAt = event.detail.finishedAt;
			todos[idx].isFinished = event.detail.isFinished;
			updated = todos[idx];
			break;
		}

		if (updated == undefined) return;
		await fetch(`/todos/${updated.id}`, {
			method: 'PUT',
			body: JSON.stringify(event.detail),
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
		})
	}
</script>

<div>
	<ul>
		{#each todos as todo (todo.id)}
			<li>
				<TodoEntry {todo} on:removetodo={handleRemoveTodo} on:updatetodo={handleUpdateTodo} />
			</li>
		{/each}
	</ul>

	<button on:click={newTodo}>New Todo</button>
</div>

<style>
	div {
		padding: 20px;

		background-color: gray;

		border: 0;
		border-radius: 25px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	ul {
		padding: 0px;

		list-style: none;
	}
</style>
