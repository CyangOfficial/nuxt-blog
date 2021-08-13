import { setItem, getItem } from '@/utils/storage'

export const state = () => ({
  blogTheme: 'default-theme',
  isMobile: false
})

export const mutations = {
  toogleTheme (state) {
    const theme = state.blogTheme === 'default-theme' ? 'dark-theme': 'default-theme'
    state.blogTheme = theme
    setItem('blog-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  },
  initTheme (state) {
    const getTheme = getItem('blog-theme') || setItem('blog-theme', 'default-theme')
    state.blogTheme = getTheme
    document.documentElement.setAttribute('data-theme', getTheme)
  },
  isMobile (state) {
    const reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    const screelWidth = document.documentElement.clientWidth
    const flag = navigator.userAgent.match(reg) || screelWidth < 996
    state.isMobile = flag
  },
  initStoreHandle () {
    this.commit('initTheme')
    this.commit('isMobile')
  }
}
