// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'

import './reset.scss'
import './light.scss'
import './dark.scss'

import TouchFish from './components/TouchFish.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => [h(TouchFish)],
    })
  },
}
