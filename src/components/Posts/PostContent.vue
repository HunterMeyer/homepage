<template>
  <div class="mx-auto">
    <div class="flex">
      <div class="w-full py-10 text-center">
        <h1 class="text-4xl leading-none">{{ post.fields.title }}</h1>
        <div class="text-sm text-gray-500 mt-3">by {{ post.fields.author }} on {{ post.sys.createdAt | date }}</div>
        <div v-if="tags.length > 0" class="mt-3">
          <span v-for="(tag, index) in tags" :key="index" class="inline-block rounded-full bg-gray-200 text-gray-600 text-xs font-semibold uppercase px-3 py-1 m-1">#{{ tag }}</span>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-full md:w-2/3 bg-white rounded shadow-lg px-10 py-8 mx-auto">
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      let { file, title } = node.data.target.fields
      return `<img src=${file.url} title=${title} />`
    },
    [BLOCKS.PARAGRAPH]: (node, next) => {
      let parsedBackticks = next(node.content).replace(/`(.*?)`/g, "<span class='inline-code'>$1</span>")
      return `<p class="py-2">${parsedBackticks}</p>`
    },
    [BLOCKS.HEADING_1]: node => `<h1 class="font-semibold text-3xl">${node.content[0].value}</h1>`,
    [BLOCKS.HEADING_2]: node => `<h2 class="font-semibold text-2xl">${node.content[0].value}</h2>`,
    [BLOCKS.HEADING_3]: node => `<h3 class="font-semibold text-xl">${node.content[0].value}</h3>`,
    [BLOCKS.HEADING_4]: node => `<h4 class="font-semibold text-lg">${node.content[0].value}</h4>`,
    [INLINES.HYPERLINK]: node => {
      let title = node.content[0].value
      let url = node.data.uri
      let css = 'text-teal-500 hover:text-teal-600 focus:text-teal-600 underline'
      return `<a href="${url}" class="${css}" target="_blank">${title}</a>`
    }
  },
  renderMark: {
    [MARKS.BOLD]: text =>`<b class="text-bold">${text}</b>`,
    [MARKS.ITALIC]: text =>`<span class="text-italic">${text}</span>`,
    [MARKS.UNDERLINE]: text =>`<span class="text-underline">${text}</span>`,
    [MARKS.CODE]: text =>`<code class="rounded shadow-md px-3">${text}</code>`
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
  data() {
    return {
      content: documentToHtmlString(this.post.fields.content, renderOptions)
    }
  },
  computed: {
    tags() {
      return this.post.fields.tags || []
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
