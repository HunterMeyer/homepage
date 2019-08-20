<template lang="html">
  <div>
    <div>
      <div v-if="this.article">
        <div>
          <button @click.stop="handleCloseDialog()">
            Close
          </button>
          <div>{{ article.title }}</div>
          <button @click="handleShare(article)">Share</button>
        </div>
        <div>
          <h1>{{ article.title }}</h1>
          <div>
            <small v-if="article.metadata.author">Posted on {{ article.published_at }} by {{ article.metadata.author }}</small>
          </div>
          <div>{{ article.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    dialog: false
  }),
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
    handleCloseDialog () {
      this.postDialog = false
      this.$router.go(-1)
      this.$store.commit('setActivePost', null)
    }
  },
  props: {
    article: {
      type: Object,
      required: true,
      default: null
    }
  },
  metaInfo () {
    return {
      title: this.article.title,
      titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
    }
  }
}
</script>
