<template>
  <div data-component="card" class="w-full rounded-3xl p-4 md:p-8 shadow-lg bg-white dark:bg-my-black-700">
    <article class="flex flex-col gap-6 text-black dark:text-white">
      <header class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold">Resume</h2>
        <Strike />
      </header>

      <section class="flex flex-col gap-4">
        <Experience />
        <Education />
        <Skills />
      </section>
    </article>
  </div>
</template>

<script setup>
import { Education, Experience, Skills } from "./Resume/index.js"
import Strike from "@/components/Strike.vue"
</script>
