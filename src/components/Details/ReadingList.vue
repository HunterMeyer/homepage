<template>
  <BaseCard class="flex flex-col gap-6 text-black md:pt-20 dark:text-white">
    <header class="flex flex-col gap-4 md:hidden">
      <h2 class="text-3xl font-bold">Readling list</h2>
      <Strike />
    </header>

    <section class="grid grid-cols-1 gap-8">
      <ReadingListItem
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
import Strike from "@/components/Strike.vue"
import ReadingListItem from "./ReadingListItem.vue"

const items = readingListData.filter((item) => item.visible)
</script>
