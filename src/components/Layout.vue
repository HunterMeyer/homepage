<template>
  <div class="container mx-auto p-4 pb-16 md:max-w-2xl md:p-10 lg:max-w-5xl">
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
