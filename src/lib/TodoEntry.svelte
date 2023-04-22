<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Todo } from './todo';
	import type { RemoveTodoEvent, UpdateTodoEvent } from './types';

	export let todo: Todo;
	export let isEditable = false;
	export let isShowingDescription = false;

	const dispatchUpdate = createEventDispatcher<{ updatetodo: UpdateTodoEvent }>();
	const dispatchRemove = createEventDispatcher<{ removetodo: RemoveTodoEvent }>();

	function check() {
		todo.finishedAt = new Date().getTime() / 1000,
		todo.isFinished = true
	}

	function edit() {
		isEditable = true;
	}

	function remove() {
		dispatchRemove('removetodo', { id: todo.id });
	}

	function save() {
		isEditable = false;

		dispatchUpdate('updatetodo', {
			id: todo.id,
			title: todo.title,
			description: todo.description,
			finishedAt: todo.finishedAt,
			isFinished: todo.isFinished,
		});
	}

	function showDescription() {
		if (isShowingDescription) return;
		isShowingDescription = true;
	}

	function hideDescription() {
		if (!isShowingDescription) return;
		isShowingDescription = false;
	}
</script>

<div>
	<div class="row">
		{#if isShowingDescription}
			<button on:click={hideDescription}>🔺</button>
		{:else}
			<button on:click={showDescription}>🔻</button>
		{/if}

		<input
			type="text"
			class="first-color {todo.isFinished ? 'finished' : ''}"
			bind:value={todo.title}
			disabled={!isEditable}
		/>

		{#if isEditable}
			<button on:click={save}>Save</button>
			<button on:click={remove}>❌</button>
		{:else}
			<button on:click={edit}>Edit</button>
			<button on:click={check}>✔️</button>
		{/if}
	</div>

	<div class="row">
		{#if isShowingDescription}
			<br>
			<textarea class="first-color {todo.isFinished ? 'finished' : ''}" bind:value={todo.description} cols="60" disabled={!isEditable}></textarea>
		{/if}
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	div .row {
		flex-direction: row;
	}

	input {
		padding: 3px 20px 3px 20px;
		margin: 1px 1px;

		border: 0;
		border-radius: 25px;

		font-family: 'Noto Sans KR', serif;
		font-size: medium;
		font-weight: 500;
	}

	.finished {
		color: darkgray;
		text-decoration: line-through;
	}
</style>
