<script lang="ts">
	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';

	import type { Todo } from '$lib/todo';
	import TodoList from '$lib/TodoList.svelte';
	import type { NewTodoEvent } from '$lib/types';

	let todos: Todo[] = [];
	onMount(async () => {
		const res = await fetch('/todos');
		todos = await res.json();
	});

	async function handleNewTodo(event: CustomEvent<NewTodoEvent>) {
		const todo: Todo = {
			id: uuidv4(),
			title: event.detail.title,
			description: event.detail.description,
			createdAt: new Date().getTime() / 1000,
			finishedAt: 0,
			isFinished: false
		};
		todos = [...todos, todo];
		await fetch('/todos', {
			method: 'POST',
			body: JSON.stringify(todo),
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
		});
	}
</script>

<div>
	<h1>Todo List</h1>
	<TodoList {todos} on:newtodo={handleNewTodo} />
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
