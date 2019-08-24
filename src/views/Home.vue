<template>
  <div class="flex flex-wrap p-6 bg-gray-700">
    <h1 class="text-4xl text-white">I'm Hunter Meyer</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
  }
}
</script>