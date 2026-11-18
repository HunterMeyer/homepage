<template>
  <BaseCard class="flex flex-col gap-6">
    <SectionHeader
      title="Projects"
      kicker="Game library"
      :stage="3"
    />

    <section class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <PortfolioItem
        v-for="item in items"
        :key="item.name"
        :item="item"
      />
    </section>
  </BaseCard>
</template>

<script setup>
import { portfolioData } from "@/data/portfolio.js"
import SectionHeader from "@/components/SectionHeader.vue"
import BaseCard from "../BaseCard.vue"
import PortfolioItem from "./PortfolioItem.vue"

const items = portfolioData.filter((item) => item.visible)
</script>
