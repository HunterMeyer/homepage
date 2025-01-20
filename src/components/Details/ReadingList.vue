<template>
  <BaseCard class="flex flex-col gap-6 text-black dark:text-white md:pt-20">
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
import { readingListData } from "@/data/reading-list.js"
import BaseCard from "../BaseCard.vue"
import PortfolioItem from "./PortfolioItem.vue"

const items = readingListData.filter((item) => item.visible)
</script>
