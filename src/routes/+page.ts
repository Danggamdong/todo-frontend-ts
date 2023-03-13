/** @type {import('./$types').PageLoad} */
export async function load({
	fetch
}: {
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
}) {
	const res = await fetch('/todos', { method: 'GET' });
	const item = await res.json();

	return { todos: item };
}
