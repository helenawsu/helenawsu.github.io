import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */

import { mdsvex } from 'mdsvex'

const config = {
	kit: {
		adapter: adapter(),
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
	},
	
		extensions: ['.svelte', '.md'],
		preprocess: [
			sveltePreprocess(),
			mdsvex({
				extensions: ['.md'],
				layout: {
					blog: 'src/routes/blog/post.svelte'
				  },
			  })
		  ],
};

export default config;
