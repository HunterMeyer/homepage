<template>
  <BaseCard class="lg:sticky lg:top-10 lg:w-min lg:self-start">
    <div class="flex flex-col gap-6">
      <div class="flex items-center gap-4 md:gap-6 lg:flex-col">
        <figure>
          <img
            :src="personData.imageUrl"
            class="h-24 w-24 rounded-xl md:h-32 md:w-32 lg:h-full lg:w-full lg:rounded-2xl"
            :alt="personData.name"
          />
        </figure>
        <header class="flex flex-col items-start gap-2 md:gap-4 lg:items-center">
          <h1
            class="whitespace-nowrap text-xl font-semibold text-black md:text-2xl dark:text-white"
          >
            {{ personData.name }}
          </h1>
          <BaseBadge :title="personData.badge" />
        </header>
      </div>
      <div
        data-component="separator"
        class="h-px rounded-full bg-gray-200 dark:bg-gray-200/20"
      ></div>
      <div class="flex flex-row items-center justify-around lg:justify-between">
        <SocialLink
          v-for="(link, index) in socialLinksData"
          :key="index"
          :link="link"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { socialLinksData } from "@/data/social-links.js"
import { personData } from "@/data/person.js"
import SocialLink from "./Person/SocialLink.vue"
import BaseCard from "./BaseCard.vue"
import BaseBadge from "./BaseBadge.vue"
</script>
