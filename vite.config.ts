import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/todos': 'http://misut.synology.me:12345'
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
