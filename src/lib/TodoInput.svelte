<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export const dispatch = createEventDispatcher<{ newtodo: { description: string } }>();
	export let value = '';

	function submitNewTodo() {
		if (value === '') {
			alert('No Todo Typed!');
			return;
		}
		dispatch('newtodo', { description: value });
		value = '';
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
		bind:value
		on:keydown={handleKeydown}
		placeholder="Type New Todo"
	/>
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
</style>
