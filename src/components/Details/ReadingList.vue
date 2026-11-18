<template>
  <BaseCard class="flex flex-col gap-6">
    <SectionHeader
      title="Reading list"
      kicker="Lore collection"
      :stage="4"
    />

    <section class="flex flex-col divide-y divide-white/5">
      <ReadingListItem
        v-for="item in items"
        :key="item.title"
        :item="item"
        class="py-5 first:pt-0 last:pb-0"
      />
    </section>
  </BaseCard>
</template>

<script setup>
import { readingListData } from "@/data/reading-list.js"
import SectionHeader from "@/components/SectionHeader.vue"
import BaseCard from "../BaseCard.vue"
import ReadingListItem from "./ReadingListItem.vue"

const items = readingListData.filter((item) => item.visible)
</script>
