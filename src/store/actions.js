// https://vuex.vuejs.org/en/actions.html
import contentful from '@/plugins/contentful'

export default {
  initContentful: ({commit}) => {
    return contentful.getEntries({
      content_type: 'post'
    }).then(data => {
      console.log(data.items[0])
      commit('setPosts', data.items)
    })
  }
}
