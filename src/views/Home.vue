<template>
  <div>
    <div v-for="(post) in posts" :key="post.sys.id">
      <PostCard :post="post"></PostCard>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/Posts/PostCard'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    PostCard
  },
  created () {
    this.$store.dispatch('getPosts')
  },
  computed: {
    ...mapGetters([
      'posts'
    ])
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
  }
}
</script>