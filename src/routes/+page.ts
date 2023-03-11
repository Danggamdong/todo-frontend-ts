/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch('/todos', { method: 'GET' });
	const item = await res.json();

	return { todos: item };
}
