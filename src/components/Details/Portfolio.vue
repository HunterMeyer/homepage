<template>
  <article class="portfolio">
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">
      <ul class="project-list">
        <PortfolioItem v-for="item in items" :item="item" />
      </ul>
    </section>
  </article>
</template>

<script setup>
import portfolio from "../../data/portfolio.js"
import PortfolioItem from "./PortfolioItem.vue"

const items = portfolio.filter(item => item.visible)
</script>
