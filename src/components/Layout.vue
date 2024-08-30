<template>
  <div class="
    container
    bg-stone-200
    dark:bg-my-black-900
    mx-auto
    md:max-w-2xl
    lg:max-w-5xl
    p-6
    pb-16
    md:p-10
    selection:bg-yellow-500
    dark:selection:bg-yellow-600
  ">
    <div class="flex flex-col lg:flex-row gap-6 md:gap-8">
      <ThePerson />
      <TheDetails />
    </div>
  </div>
</template>

<script setup>
import ThePerson from "./ThePerson.vue"
import TheDetails from "./TheDetails.vue"
</script>
