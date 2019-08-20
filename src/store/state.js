// https://vuex.vuejs.org/en/state.html

export default {
  drawer: false,
  postDialog: false,
  activePost: null,
  status: {
    loading: false,
    success: false,
    error: false
  },
  shareLinks: [],
  posts: [],
  menu: [
    { icon: 'mdi-home-outline', title: 'Home', link: '/' },
    { icon: 'mdi-information-outline', title: 'About', link: '/about' }
  ],
  settings: {},
  socialSettings: {}
}