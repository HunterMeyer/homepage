<template>
  <main>
    <ThePerson />
    <TheDetails />
  </main>
</template>

<script setup>
import { onBeforeMount } from "vue"
import { setInitialTheme } from "@/utils/theme"
import ThePerson from "@/components/ThePerson.vue"
import TheDetails from "@/components/TheDetails.vue"

onBeforeMount(() => {
  setInitialTheme()
})
</script>
