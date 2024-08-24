<template>
  <article class="portfolio">
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">
      <ul class="project-list">
        <PortfolioItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </ul>
    </section>
  </article>
</template>

<script setup>
import { portfolioData } from "@/data/portfolio.js"
import PortfolioItem from "./PortfolioItem.vue"

const items = portfolioData.filter(item => item.visible)
</script>
