<script lang="ts">
	import type { Todo } from './todo';

	export let todos: Todo[];
</script>

<ul>
	{#each todos as todo (todo.id)}
		<li>
			<input type="checkbox" bind:group={todos} name="todos" />
			{todo.description}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}
</style>
