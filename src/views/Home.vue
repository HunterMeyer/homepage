<template>
  <div>
    <div v-for="(post) in getPosts" :key="post._id">
      <PostListItem :article="post"></PostListItem>
    </div>
    <app-post-dialog v-if="getActivePost" :article="getActivePost"></app-post-dialog>
  </div>
</template>

<script>
import PostListItem from '@/components/Posts/PostListItem'
import { mapGetters } from 'vuex'
export default {
  components: {
    PostListItem
  },
  computed: {
    ...mapGetters([
      'loading',
      'getPosts',
      'getActivePost'
    ]),
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | '+ process.env.VUE_APP_TITLE
  }
}
</script>