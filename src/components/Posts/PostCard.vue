<template>
  <router-link :to="{ name: 'Post', params: { slug: post.fields.slug } }">
    <div class="rounded shadow-lg bg-white m-2 hover:bg-gray-700 hover:text-white">
      <div class="px-6 py-4">
        <div class="font-semibold text-xl leading-none mb-1">{{ post.fields.title }}</div>
        <div class="text-sm text-gray-500">{{ post.sys.createdAt | date }}</div>
        <p class="text-base mt-3 h-12 overflow-hidden">
          {{ post.fields.description }}
        </p>
      </div>
      <div v-if="tags.length > 0" class="px-6 pb-6 md:p-6">
        <span v-for="(tag, index) in tags" :key="index" class="inline-block rounded-full bg-gray-200 text-gray-600 text-xs font-semibold uppercase px-3 py-1 mr-1 mb-1">#{{ tag }}</span>
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
  },
  computed: {
    tags() {
      return this.post.fields.tags || []
    }
  }
}
</script>
