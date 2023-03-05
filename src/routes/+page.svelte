<script lang="ts">
  import { onMount } from 'svelte';
  import type { Todo } from '../lib/todo';

  let todos: Todo[] = [];

  let value: string = '';

  onMount(async () => {
    const fetched = await fetch('/todos');
    todos = await fetched.json();
  });

  async function handleKeydown(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key != 'Enter') {
      return;
    }

    const todo: Todo = {
      id: todos.length + 1,
      description: value,
      created_at: new Date().getTime() / 1000,
      is_finished: false,
    };
    todos = [...todos, todo];
    await fetch('/todos', {method: 'POST', body: JSON.stringify(todo), headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
  }
</script>

<h1>Todo</h1>

{#each todos as todo (todo.id)}
  <input type="checkbox" bind:group={todos} name="todos">
  {todo.description}
  <button>Delete</button>
  <br>
{/each}

<br>

<label>
  Enter a new todo
  <input bind:value on:keydown={handleKeydown}>
</label>
