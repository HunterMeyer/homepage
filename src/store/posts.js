import contentful from '@/plugins/contentful'

export const state = () => ({
  posts: [],
  currentPost: {},
  isLoading: true
})

export const getters = {
  posts: state => { return state.posts },
  currentPost: state => { return state.currentPost },
  isLoading: state => { return state.isLoading }
}

export const mutations = {
  setCurrentPost(state, payload) {
    state.currentPost = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  },
  setPosts(state, payload) {
    state.posts = payload
  }
}
export const actions = {
  async getPostBySlug({commit}, slug) {
    commit('setLoading', true);
    const response = await contentful.getEntries({
      content_type: 'post',
      'fields.slug': slug
    })
    commit('setCurrentPost', response.items[0])
    commit('setLoading', false)
  },
  async getPosts({commit}, limit = 4) {
    commit('setLoading', true);
    const response = await contentful.getEntries({
      content_type: 'post',
      limit: limit,
      order: '-sys.createdAt'
    })
    commit('setPosts', response.items)
  }
}
