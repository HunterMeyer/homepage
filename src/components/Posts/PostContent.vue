<template>
  <div>
    <h1>{{ post.fields.title }}</h1>
    <div v-html="content"></div>
</div>
</template>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      let { file, title } = node.data.target.fields
      return `<img src=${file.url} title=${title} />`
    }
  }
}

export default {
  name: 'PostContent',
  props: {
    post: {
      type: Object,
      require: true
    }
  },
  computed: {
    content() {
      return documentToHtmlString(this.post.fields.content, renderOptions)
    }
  },
  methods: {
    highlightPost() {
      document.querySelectorAll('code').forEach((block) => {
        window.hljs.highlightBlock(block)
      })
    }
  },
  mounted() {
    this.highlightPost()
  },
  metaInfo() {
    return {
      title: this.post.fields.title,
      titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
    }
  }
}

</script>