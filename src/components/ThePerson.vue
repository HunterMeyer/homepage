<template>
  <section
    data-component="sidebar"
    class="
      w-full
      lg:w-min
      lg:sticky
      lg:top-10
      lg:self-start
      p-4
      md:p-8
      rounded-3xl
      bg-stone-200
      dark:bg-my-black-700
      neu-shadow-inset-xs
    "
  >
    <div class="flex flex-col gap-4 md:gap-6">
      <div class="flex lg:flex-col gap-4 md:gap-6 items-center">
        <figure>
          <img :src="personData.imageUrl" class="rounded-xl w-24 h-24 md:w-32 md:h-32 lg:w-full lg:h-full lg:rounded-2xl" :alt="personData.name" >
        </figure>
        <header class="flex flex-col gap-2 md:gap-4 items-start lg:items-center">
          <h1 class="text-xl md:text-2xl font-semibold text-black dark:text-white whitespace-nowrap">{{ personData.name }}</h1>
          <div class="rounded-lg px-3 py-1 text-xs font-light text-center bg-black dark:bg-my-black-500 text-white ">
            {{ personData.badge }}
          </div>
        </header>
      </div>
      <div data-component="separator" class="h-px rounded-full bg-stone-300 dark:bg-my-black-500"></div>
      <div class="flex flex-row gap-4 lg:gap-4 items-center lg:justify-between">
        <SocialLink
          v-for="(link, index) in socialLinksData"
          :key="index"
          :link="link"
        />
        <div class="grow lg:hidden"></div>
        <TheThemer />
      </div>
    </div>
  </section>
</template>

<script setup>
import { socialLinksData } from "@/data/social-links.js"
import { personData } from "@/data/person.js"
import TheThemer from "./TheThemer.vue"
import SocialLink from "./Person/SocialLink.vue"
</script>
