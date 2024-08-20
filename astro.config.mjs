import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: ' ',
    logo: {
      src: './public/img/index/logo.png'
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
            label: 'Manual Setup',
            slug: 'install/manual'
          },
          {
            label: 'Configure on Citra',
            slug: 'install/configure'
          },
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
      },
      {
        label: 'Credits',  // Nouvelle section "Uninstall"
        items: [
          {
            label: 'Credits',
            slug: 'credits/credits'
          }
        ]
      },
    ]
  }), tailwind()]
});
