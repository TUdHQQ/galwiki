import { defineConfig } from 'vitepress'
import { socialLinksConfig } from './config/socialLinks'
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Galgame Wiki",
  description: "A useful wiki for galgamer",
  base: '/',
  srcDir: 'articles',
  outDir: './dist',
  
  sitemap: { hostname: 'https://galwiki.listder.xyz' },
  head: [
    ['link', { rel: 'icon', href: '/favicon.webp' }],
  ],
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/yuki.webp',
    
    sidebar: generateSidebar({
      // https://vitepress-sidebar.cdget.com/guide/getting-started
      documentRootPath: '/articles',
      useTitleFromFileHeading: true,
      sortMenusByName: true,
      collapsed: false,
      collapseDepth: 3,
      rootGroupCollapsed: false,
      includeEmptyFolder: false,
      includeFolderIndexFile: false,
      useFolderTitleFromIndexFile: true,
      sortFolderTo: 'bottom',
      excludePattern: ['SUMMARY.md'],
    }),
    lastUpdated: {
      text: 'Last Updated At',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: '游玩指南', link: '/play_guide/Android/extract' },
      { text: '资源站', link: '/website/resources' },
    ],

    socialLinks: socialLinksConfig,

    search: {
      provider: 'local',
    },
  },

  markdown: {
    lineNumbers: true,
  },
})
