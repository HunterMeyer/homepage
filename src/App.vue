<template>
  <Layout />
</template>

<script setup>
import { onBeforeMount } from "vue"
import { setInitialTheme } from "@/utils/theme"
import Layout from "@/components/Layout.vue"

onBeforeMount(() => {
  // TODO: Remove if adding TheThemer
  // setInitialTheme()
})
</script>
