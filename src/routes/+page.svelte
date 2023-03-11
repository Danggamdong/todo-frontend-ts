<script lang="ts">
	import type { PageData } from './$types';

	import type { Todo } from '$lib/todo';
	import TodoList from '$lib/TodoList.svelte';

	export let data: PageData;

	let value: string = '';

	async function handleKeydown(event: KeyboardEvent) {
		console.log(event.key);
		if (event.key != 'Enter') {
			return;
		}

		const todo: Todo = {
			id: data.todos.length + 1,
			description: value,
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

<h1>Todo List</h1>

<TodoList todos={data.todos} />

<label>
	Enter a new todo
	<input bind:value on:keydown={handleKeydown} />
</label>
