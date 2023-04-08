<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { NewTodoEvent } from './types';

	export const dispatch = createEventDispatcher<{ newtodo: NewTodoEvent }>();
	export let title = '';
	export let description = '';

	function submitNewTodo() {
		if (title === '') {
			alert('No Todo Typed!');
			return;
		}
		dispatch('newtodo', { title: title, description: description });
		title = '';
		description = '';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key != 'Enter') {
			return;
		}
		submitNewTodo();
	}
</script>

<div>
	<input
		type="text"
		class="second-color"
		bind:value={title}
		on:keydown={handleKeydown}
		placeholder="Type Title"
	/>
	<br>
	<textarea class="first-color" bind:value={description} cols="50" rows="3" placeholder="Type Description"></textarea>

	<button on:click={submitNewTodo}>➕</button>
</div>

<style>
	input {
		padding: 3px 20px 3px 20px;

		border: 0;
		border-radius: 25px;

		font-family: 'Noto Sans KR', serif;
		font-size: medium;
		font-weight: 500;
	}

	textarea {
		resize: none;
	}
</style>
