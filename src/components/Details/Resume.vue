<template>
  <BaseCard class="flex flex-col gap-6 text-black dark:text-white md:pt-20">
    <section class="flex flex-col gap-4">
      <Experience />
      <Education />
      <Skills />
    </section>
  </BaseCard>
</template>

<script setup>
import { Education, Experience, Skills } from "./Resume/index.js"
import BaseCard from "../BaseCard.vue"
</script>
