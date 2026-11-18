<template>
  <BaseCard
    class="animate-scale-up lg:sticky lg:top-10 lg:w-80 lg:shrink-0 lg:self-start"
  >
    <div class="flex flex-col gap-5">
      <div class="flex items-center justify-between">
        <span class="pixel-label text-neon-cyan">Player 1</span>
        <span class="pixel-label text-neon-gold">Lv {{ level }}</span>
      </div>

      <div class="flex items-center gap-4 md:gap-6 lg:flex-col lg:gap-5">
        <figure
          class="shrink-0 rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-magenta p-[2px] shadow-glow"
        >
          <img
            :src="personData.imageUrl"
            :alt="personData.name"
            width="512"
            height="512"
            class="h-24 w-24 rounded-[14px] object-cover md:h-32 md:w-32 lg:h-auto lg:w-full"
          />
        </figure>

        <header class="flex min-w-0 flex-col items-start gap-2 md:gap-3 lg:items-center">
          <h1
            class="neon-text font-display text-lg font-bold uppercase tracking-wide text-white sm:text-xl md:text-2xl"
          >
            {{ personData.name }}
          </h1>
          <BaseBadge :title="personData.badge" />
        </header>
      </div>

      <p
        v-if="currentRole"
        class="flex items-center gap-2 text-sm text-arcade-300 lg:justify-center"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-lime opacity-60 motion-reduce:hidden"
          ></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-neon-lime"></span>
        </span>
        Now playing at
        <a
          :href="currentRole.url"
          target="_blank"
          class="rounded font-semibold text-white hover:text-neon-cyan"
          >{{ currentRole.company }}</a
        >
      </p>

      <div
        aria-hidden="true"
        class="h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent"
      ></div>

      <div class="flex flex-row items-center justify-center gap-4">
        <SocialLink
          v-for="link in socialLinksData"
          :key="link.url"
          :link="link"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { socialLinksData } from "@/data/social-links.js"
import { personData } from "@/data/person.js"
import { currentRole, yearsOfExperience } from "@/utils/career.js"
import SocialLink from "./Person/SocialLink.vue"
import BaseCard from "./BaseCard.vue"
import BaseBadge from "./BaseBadge.vue"

const level = yearsOfExperience()
</script>
