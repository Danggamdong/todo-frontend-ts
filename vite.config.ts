import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
	if (mode === 'deploy') {
		return {
			plugins: [sveltekit()],
			server: {
				proxy: {
					'/todos': 'http://todo-backend-java.default.svc.cluster.local'
				}
			},
			test: {
				include: ['src/**/*.{test,spec}.{js,ts}']
			}
		};
	} else {
		return {
			plugins: [sveltekit()],
			server: {
				proxy: {
					'/todos': 'http://localhost:12345'
				}
			},
			test: {
				include: ['src/**/*.{test,spec}.{js,ts}']
			}
		};
	}
});
