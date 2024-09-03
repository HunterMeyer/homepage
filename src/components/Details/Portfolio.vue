<template>
  <div
    data-component="card"
    class="w-full rounded-3xl bg-white p-4 shadow-lg md:p-8 dark:bg-my-black-700"
  >
    <article class="flex flex-col gap-6 text-black dark:text-white">
      <header class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold">Portfolio</h2>
        <Strike />
      </header>

      <section class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <PortfolioItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </section>
    </article>
  </div>
</template>

<script setup>
import { portfolioData } from "@/data/portfolio.js"
import Strike from "@/components/Strike.vue"
import PortfolioItem from "./PortfolioItem.vue"

const items = portfolioData.filter((item) => item.visible)
</script>
