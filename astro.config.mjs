import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
	  starlight({
		title: ' ',
		customCss: [
			// Chemin relatif vers votre fichier CSS @font-face.
			'/src/font/font-face.css',
		  ],
		logo: {
		  src: './src/assets/tlhd.svg',
		},
			social: {
				github: 'https://github.com/FIREXDF/TLHD-Docs',
			},
			sidebar: [
				{
					
					label: 'Install',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Easy Setup', slug: 'install/easysetup' },
						{ label: 'Configure on Citra', slug: 'install/configure' },
					],
				},
			],
		}),
	],
});
