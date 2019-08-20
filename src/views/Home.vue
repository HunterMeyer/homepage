<template>
  <div>
    <div v-for="(post) in getPosts" :key="post.sys.id">
      <PostCard :post="post"></PostCard>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/Posts/PostCard'
import { mapGetters } from 'vuex'
export default {
  components: {
    PostCard
  },
  computed: {
    ...mapGetters([
      'getPosts'
    ])
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
  }
}
</script>