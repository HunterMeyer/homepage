<template lang="html">
  <div @click="handlePostcard">
    <h2>{{ article.title }}</h2>
    <div>
      <p v-if="article.metadata.author">{{ article.published_at }} by {{ article.metadata.author }}</p>
      <p v-else>{{ article.published_at }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'getSettings'
    ]),
    postDialog: {
      get () {
        return this.$store.state.postDialog
      },
      set (val) {
        this.$store.commit('setPostDialog', val)
      }
    }
  },
  methods: {
    handlePostcard () {
      this.$router.push('/post/'+this.article.slug)
      this.$store.commit('setActivePost', this.article)
      this.$store.commit('setPostDialog', true)
    }
  },
  created () {
    if (this.$route.params.id == this.article.slug) {
      this.$store.commit('setActivePost', this.article)
      this.$store.commit('setPostDialog', true)
    }
  }
}
</script>
