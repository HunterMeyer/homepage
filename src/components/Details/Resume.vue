<template>
  <article class="resume">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>

    <Experience />
    <Education />
    <Skills />
  </article>
</template>

<script setup>
import { Education, Experience, Skills } from "./Resume/index.js"
</script>
