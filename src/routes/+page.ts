type fetchType = {
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
};

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: fetchType) {
	const res = await fetch('/todos', { method: 'GET' });
	const item = await res.json();

	return { todos: item };
}
