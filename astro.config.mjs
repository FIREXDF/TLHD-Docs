import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Tomodachi Life HD Docs',
    logo: {
      src: './src/assets/logo.png'
    },
    social: {
      github: 'https://github.com/FIREXDF/TLHD-Docs'
    },
    sidebar: [
      {
        label: 'Install',
        items: [
          {
            label: 'Easy Setup',
            slug: 'install/easysetup'
          },
          {
            label: 'Configure on Citra',
            slug: 'install/configure'
          }
        ]
      },
      {
        label: 'Uninstall',  // Nouvelle section "Uninstall"
        items: [
          {
            label: 'Uninstall Tomodachi Life HD',
            slug: 'uninstall/remove'
          }
        ]
      },
      {
        label: 'Changelog',
        items: [
          {
            label: 'Version 0.1',
            slug: 'changelog/v0-1'
          },
        ]
      }
    ]
  }), tailwind()]
});
