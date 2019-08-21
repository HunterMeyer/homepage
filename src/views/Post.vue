<template>
  <div v-if="!isLoading && currentPost">
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
  created() {
    this.$store.dispatch('getPostBySlug', this.slug)
  }
}
</script>