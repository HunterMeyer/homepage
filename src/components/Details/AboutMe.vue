<template>
  <BaseCard class="flex flex-col gap-6">
    <SectionHeader
      title="About me"
      kicker="Player bio"
      :stage="1"
    />

    <section class="flex flex-col gap-4 leading-relaxed text-arcade-200 md:text-lg">
      <p>
        <strong class="font-bold text-white">Hi there!</strong> I am a results-driven full-stack
        software engineer with a decade of experience. I am adept at instituting high-quality coding
        standards and architecture, resulting in improved performance, reliability, scalability, and
        product quality. Proven success in leadership with a track record of delivering impactful
        changes.
      </p>

      <p>
        <strong class="font-bold text-white">What else?</strong> I'm a husband, father, traveler,
        terrible guitar player, and I love the drums.
      </p>

      <p>
        I also invest in building fast-growing technology companies, with my wife over at
        <a
          href="https://www.meyervisions.com"
          target="_blank"
          title="Meyer Visions"
          class="whitespace-nowrap rounded font-bold text-neon-cyan underline decoration-neon-cyan/40 underline-offset-4 transition hover:decoration-neon-cyan hover:drop-shadow-neon"
          >Meyer Visions</a
        >.
      </p>
    </section>

    <dl class="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="flex flex-col gap-2 rounded-xl border border-white/10 bg-arcade-950/50 p-3 md:p-4"
      >
        <dt class="pixel-label text-arcade-400">{{ stat.label }}</dt>
        <dd
          :class="stat.color"
          class="font-display text-2xl font-bold md:text-3xl"
        >
          {{ stat.value }}
        </dd>
      </div>
    </dl>

    <p class="text-arcade-200">
      Thanks for stopping by 
      <span
        class="animate-blink text-neon-cyan"
        aria-hidden="true"
        >▌</span
      >
    </p>
  </BaseCard>
</template>

<script setup>
import { portfolioData } from "@/data/portfolio.js"
import { readingListData } from "@/data/reading-list.js"
import { companyCount, yearsOfExperience } from "@/utils/career.js"
import SectionHeader from "@/components/SectionHeader.vue"
import BaseCard from "../BaseCard.vue"

const stats = [
  { label: "Years XP", value: yearsOfExperience(), color: "text-neon-gold" },
  { label: "Guilds", value: companyCount, color: "text-neon-cyan" },
  {
    label: "Projects",
    value: portfolioData.filter((item) => item.visible).length,
    color: "text-neon-magenta",
  },
  {
    label: "Books",
    value: readingListData.filter((item) => item.visible).length,
    color: "text-neon-lime",
  },
]
</script>
