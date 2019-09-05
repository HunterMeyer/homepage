<template>
  <div class="flex flex-wrap p-4">
    <div v-for="(project) in projects" :key="project.slug" class="w-full md:w-1/3">
      <router-link :to="{ path: project.slug }" append>
        <div class="rounded shadow-lg bg-white m-2 hover:bg-gray-700 hover:text-white">
          <div class="px-6 py-4">
            <div class="font-semibold text-xl leading-none mb-1">{{ project.name }}</div>
            <div class="text-sm text-gray-500">{{ project.subtitle }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        { name: 'Jr.DevJobs', subtitle: 'Jobs for Junior Developers', slug: 'jrdevjobs' },
        { name: 'MonthlyStash', subtitle: 'Discreet Subscription Box', slug: 'monthly-stash' }
      ]
    }
  },
  metaInfo: {
    title: 'Projects',
    titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
  }
}
</script>
