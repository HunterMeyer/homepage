<template>
  <BaseCard class="flex flex-col gap-6 text-black md:pt-24 dark:text-white">
    <header class="flex flex-col gap-4 md:hidden">
      <h2 class="text-3xl font-bold">Projects</h2>
      <Strike />
    </header>

    <section class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <PortfolioItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </section>
  </BaseCard>
</template>

<script setup>
import { portfolioData } from "@/data/portfolio.js"
import Strike from "@/components/Strike.vue"
import BaseCard from "../BaseCard.vue"
import PortfolioItem from "./PortfolioItem.vue"

const items = portfolioData.filter((item) => item.visible)
</script>
