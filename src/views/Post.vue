<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <PostContent :post="currentPost" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostContent from '@/components/Posts/PostContent'
export default {
  name: 'Post',
  components: {
    PostContent
  },
  props: {
    slug: {
      type: String
    }
  },
  computed: {
    ...mapGetters([
      'currentPost',
      'isLoading'
    ])
  },
  created () {
    this.$store.dispatch('getPostBySlug', this.slug)
  },
  metaInfo () {
    return {
      title: this.currentPost.fields.title,
      titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
    }
  }
}
</script>