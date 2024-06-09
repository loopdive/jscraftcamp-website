// import { sveltekit } from '@sveltejs/kit/vite';
// import { parseHTML } from 'linkedom';
// import 'global-jsdom/register';
import 'linkedom-global';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	/* plugins: [sveltekit()], */
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
