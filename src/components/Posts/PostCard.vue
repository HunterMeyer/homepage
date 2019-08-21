<template lang="html">
  <router-link :to="{ name: 'Post', params: { slug: post.fields.slug } }">
    <div>
      <h2>{{ post.fields.title }}</h2>
      <div>
        <p v-if="post.fields.author">{{ post.sys.createdAt | date }} by {{ post.fields.author }}</p>
        <p v-else>{{ post.sys.createdAt | date }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
