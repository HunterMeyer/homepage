<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <h1>{{ currentPost.fields.title }}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      let { file, title } = node.data.target.fields
      return `<img src=${file.url} title=${title} />`
    }
  }
};

export default {
  name: 'Post',
  props: {
    slug: {
      type: String
    }
  },
  computed: {
    ...mapGetters([
      'currentPost',
      'isLoading'
    ]),
    content() {
      if (this.currentPost) {
        return documentToHtmlString(this.currentPost.fields.content, renderOptions)
      } else {
        return ''
      }
    }
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