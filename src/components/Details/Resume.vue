<template>
  <BaseCard class="flex flex-col gap-8">
    <SectionHeader
      title="Resume"
      kicker="Quest log"
      :stage="2"
    />

    <div class="flex flex-col gap-10">
      <Experience />
      <Education />
      <Skills />
    </div>
  </BaseCard>
</template>

<script setup>
import { Education, Experience, Skills } from "./Resume/index.js"
import SectionHeader from "@/components/SectionHeader.vue"
import BaseCard from "../BaseCard.vue"
</script>
