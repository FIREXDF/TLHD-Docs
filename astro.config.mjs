import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Tomodachi Life HD',
			social: {
				github: 'https://github.com/FIREXDF/TLHD-Docs',
			},
			sidebar: [
				{
					label: 'Install',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Easy Setup', slug: 'install/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
