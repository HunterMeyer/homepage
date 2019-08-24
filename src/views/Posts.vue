<template>
  <div class="flex flex-wrap p-4">
    <div v-for="(post) in posts" :key="post.sys.id" class="w-full md:w-1/3">
      <PostCard :post="post"></PostCard>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/Posts/PostCard'
import { mapGetters } from 'vuex'
export default {
  name: 'Posts',
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
    title: 'Blog Posts',
    titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
  }
}
</script>