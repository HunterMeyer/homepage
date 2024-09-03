<template>
  <div
    class="container mx-auto bg-stone-200 p-2 pb-16 font-poppins selection:bg-yellow-500 md:max-w-2xl md:p-10 lg:max-w-5xl dark:bg-my-black-900 dark:selection:bg-yellow-600"
  >
    <div class="flex flex-col gap-4 md:gap-8 lg:flex-row">
      <ThePerson />
      <TheDetails />
    </div>
  </div>
</template>

<script setup>
import ThePerson from "./ThePerson.vue"
import TheDetails from "./TheDetails.vue"
</script>
