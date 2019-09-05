<template>
  <div class="text-center">
    <h1 class="text-4xl text-orange-500">Jr.DevJobs</h1>
    <h3 class="text-2xl text-gray-600">Jobs for Junior Developers</h3>
  </div>
</template>

<script>
export default {
  name: 'JrDevJobs',
  metaInfo: {
    title: 'Jr.DevJobs Project',
    titleTemplate: '%s | '+ process.env.VUE_APP_TITLE
  }
}
</script>
