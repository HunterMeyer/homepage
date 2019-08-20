<template>
  <div class="container min-h-screen min-w-full bg-gray-100">
    <h1>{{ greeting }}</h1>
    <div v-if="!loading">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  metaInfo: {
    title: 'App',
    titleTemplate: '%s | ' + process.env.VUE_APP_TITLE,
    meta: [
      // OpenGraph data (Most widely used)
      { property: 'og:title', content: process.env.VUE_APP_META_TITLE },
      { property: 'og:site_name', content: process.env.VUE_APP_TITLE },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: 'https://www.'+ process.env.VUE_APP_DOMAIN },
      { property: 'og:image', content: 'https://www.'+ process.env.VUE_APP_META_LOGO },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: process.env.VUE_APP_META_DESC },
      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://www.'+process.env.VUE_APP_DOMAIN },
      { name: 'twitter:title', content: process.env.VUE_APP_META_TITLE },
      { name: 'twitter:description', content: process.env.VUE_APP_META_DESC },
      // Your twitter handle, if you have one.
      { name: 'twitter:creator', content: '@hunnafresh' },
      { name: 'twitter:image:src', content: 'https://www.'+process.env.VUE_APP_META_LOGO },
      // Google / Schema.org markup:
      { itemprop: 'name', content: process.env.VUE_APP_META_TITLE },
      { name: 'description', itemprop: 'description', content: process.env.VUE_APP_META_DESC },
      { itemprop: 'image', content: 'https://www.'+process.env.VUE_APP_META_LOGO }
    ]
  },
  data () {
    return {
      greeting: "Welcome to the Homepage"
    }
  },
  created () {
    this.$store.dispatch('initCosmic')
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  }
}
</script>
