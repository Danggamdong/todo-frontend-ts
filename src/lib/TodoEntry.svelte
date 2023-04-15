<script lang="ts">
	import type { Todo } from './todo';

	export let todo: Todo;
	export let editable = false;
	export let isShowingDescription = false;

	function ShowDescription() {
		if (isShowingDescription) return;
		isShowingDescription = true;
	}

	function HideDescription() {
		if (!isShowingDescription) return;
		isShowingDescription = false;
	}
</script>

{#if isShowingDescription}
	<button on:click={HideDescription}>🔺</button>
{:else}
	<button on:click={ShowDescription}>🔻</button>
{/if}

<input
	type="text"
	class="first-color {todo.isFinished ? 'finished' : ''}"
	bind:value={todo.title}
	disabled={!editable}
/>

{#if isShowingDescription}
	<br>
	<textarea class="first-color {todo.isFinished ? 'finished' : ''}" bind:value={todo.description} cols="60" disabled={!editable}></textarea>
{/if}

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
