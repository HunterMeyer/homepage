<template lang="html">
  <div>
    <h1>404</h1>
    <p>The page or file you're looking for doesn't exist.</p>
  </div>
</template>


<script>
export default {
  metaInfo: {
    title: 'Error: 404 Not Found',
    titleTemplate: '%s | '+ process.env.VUE_APP_TITLE
  }
}
</script>