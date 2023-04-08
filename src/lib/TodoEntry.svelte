<script lang="ts">
	import type { Todo } from './todo';

	export let todo: Todo;
	export let editable = false;
</script>

<input
	type="text"
	class="first-color {todo.isFinished ? 'finished' : ''}"
	bind:value={todo.title}
	disabled={!editable}
/>

<style>
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
