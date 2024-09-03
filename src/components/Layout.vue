<template>
  <div class="
    w-full
    h-full
    overflow-y-scroll
    bg-stone-200
    dark:bg-my-black-700
  ">
    <div class="
      container
      mx-auto
      md:max-w-2xl
      lg:max-w-5xl
      p-2
      pb-16
      md:p-10
      selection:bg-yellow-500
      dark:selection:bg-yellow-600
    ">
      <div class="flex flex-col lg:flex-row gap-4 md:gap-12">
        <ThePerson />
        <TheDetails />
      </div>
    </div>
  </div>
</template>

<script setup>
import ThePerson from "./ThePerson.vue"
import TheDetails from "./TheDetails.vue"
</script>
