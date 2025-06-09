<template>
  <BaseCard class="flex flex-col gap-6 text-black md:pt-24 dark:text-white">
    <header class="flex flex-col gap-4 md:hidden">
      <h2 class="text-3xl font-bold">Resume</h2>
      <Strike />
    </header>

    <section class="flex flex-col gap-4">
      <Experience />
      <Education />
      <Skills />
    </section>
  </BaseCard>
</template>

<script setup>
import { Education, Experience, Skills } from "./Resume/index.js"
import Strike from "@/components/Strike.vue"
import BaseCard from "../BaseCard.vue"
</script>
