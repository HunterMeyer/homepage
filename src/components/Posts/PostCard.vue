<template lang="html">
  <div @click="onClick">
    <h2>{{ post.fields.title }}</h2>
    <div>
      <p v-if="post.fields.author">{{ post.sys.createdAt | date }} by {{ post.fields.author }}</p>
      <p v-else>{{ post.sys.createdAt | date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick () {
      this.$router.push('/posts/' + this.article.slug)
    }
  }
}
</script>
