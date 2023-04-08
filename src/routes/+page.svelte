<script lang="ts">
	import type { PageData } from './$types';

	import TodoInput from '$lib/TodoInput.svelte';
	import TodoList from '$lib/TodoList.svelte';
	import type { Todo } from '$lib/todo';
	import type { newTodoEventType } from '$lib/types';

	export let data: PageData;

	async function handleNewTodo(event: CustomEvent<newTodoEventType>) {
		const todo: Todo = {
			id: crypto.randomUUID(),
			title: event.detail.title,
			description: event.detail.description,
			createdAt: new Date().getTime() / 1000,
			finishedAt: 0,
			isFinished: false
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
