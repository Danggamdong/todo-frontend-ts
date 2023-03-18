<script lang="ts">
	import type { PageData } from './$types';

	import type { Todo } from '$lib/todo';
	import TodoInput from '$lib/TodoInput.svelte';
	import TodoList from '$lib/TodoList.svelte';

	export let data: PageData;

	let value = '';

	async function handleNewTodo(event: CustomEvent<{ description: string }>) {
		const todo: Todo = {
			id: data.todos.length + 1,
			description: event.detail.description,
			created_at: new Date().getTime() / 1000,
			is_finished: false
		};
		data.todos = [...data.todos, todo];
		await fetch('/todos', {
			method: 'POST',
			body: JSON.stringify(todo),
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
		});
	}
</script>

<div>
	<h1>Todo List</h1>
	<TodoInput on:newtodo={handleNewTodo} />
	<TodoList todos={data.todos} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/* Globals Below
	source: https://palettes.shecodes.io/palettes/1313
	*/

	:global(.first-color) {
		background: #ececec;
		color: #333333;
	}

	:global(.second-color) {
		background: #9fd3c7;
		color: #333333;
	}

	:global(.third-color) {
		background: #385170;
		color: #dddddd;
	}

	:global(.fourth-color) {
		background: #142d4c;
		color: #dddddd;
	}
</style>
