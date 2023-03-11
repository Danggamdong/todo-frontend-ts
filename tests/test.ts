import { expect, test } from '@playwright/test';

import type { Todo } from '$lib/todo';

let todos: Todo[] = [];

test.beforeEach(async ({ page }) => {
	await page.route('/todos', async (route) => {
		const request = route.request();
		switch (request.method()) {
			case 'GET':
				await route.fulfill({ status: 200, body: JSON.stringify(todos) });
				break;
			case 'POST':
				const todo = request.postData();
				if (todo === null) {
					await route.fulfill({ status: 400 });
					break;
				}

				todos = [...todos, JSON.parse(todo)];
				await route.fulfill({ status: 201, body: JSON.stringify({ id: todos.length }) });
				break;
			default:
				await route.fulfill({ status: 404 });
		}
	});
});

test('has heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Todo List' })).toBeVisible();
});

test('create todo', async ({ page }) => {
	await page.goto('/');

	const todoText = page.getByLabel('Enter a new todo');
	await expect(todoText).toBeEnabled();

	const expectedTodo = new Date().toISOString();
	await todoText.fill(expectedTodo);
	await todoText.press('Enter');
	await expect(page.getByRole('listitem').filter({ hasText: expectedTodo })).toBeVisible();
});
