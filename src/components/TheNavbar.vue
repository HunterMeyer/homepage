<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-700 px-6 py-4">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Hunter Meyer</span>
    </div>
    <div class="flex-grow flex items-center w-auto">
      <div class="text-md flex-grow" role="menu">
        <span v-for="(path, index) in paths" :key="index">
          <router-link :to="path.to" :exact="path.exact" active-class="border-b-2 border-white" role="menuitem" class="inline-block text-teal-300 hover:text-white mr-4">
            {{ path.title }}
          </router-link>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      paths: [
        { to: '/', title: 'Home', exact: true },
        { to: '/posts', title: 'Blog', exact: false }
      ]
    }
  }
}
</script>