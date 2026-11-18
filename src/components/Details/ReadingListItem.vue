<template>
  <article class="grid animate-scale-up grid-cols-[5.5rem_1fr] gap-4 md:grid-cols-[7.5rem_1fr] md:gap-6">
    <a
      v-bind="linkAttrs"
      tabindex="-1"
      aria-hidden="true"
      class="group self-start"
    >
      <figure
        class="crt aspect-[2/3] overflow-hidden rounded-lg border border-white/10 shadow-panel transition duration-200 group-hover:-translate-y-1 group-hover:border-neon-cyan/60 group-hover:shadow-glow"
      >
        <img
          :src="item.imageUrl"
          alt=""
          class="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </figure>
    </a>

    <div class="flex min-w-0 flex-col gap-1.5">
      <div
        v-if="isReading"
        class="mb-1"
      >
        <BaseBadge variant="magenta">
          <span
            class="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-magenta"
            aria-hidden="true"
          ></span>
          Now reading
        </BaseBadge>
      </div>
      <h3 class="font-display text-base font-bold leading-snug text-white md:text-lg">
        <a
          v-bind="linkAttrs"
          class="rounded transition hover:text-neon-cyan"
        >
          {{ item.title }}
        </a>
      </h3>
      <p class="text-sm text-arcade-300">{{ item.author }}</p>
      <p class="mt-1 text-sm leading-relaxed text-arcade-300 max-md:line-clamp-3 md:text-base">
        {{ item.description }}
      </p>
      <div
        v-if="hasGenres"
        class="mt-2 flex flex-wrap gap-2"
      >
        <BaseBadge
          v-for="genre in item.genres"
          :key="genre"
          :title="genre"
          variant="muted"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
import BaseBadge from "../BaseBadge.vue"
import { readStatus } from "@/data/reading-list.js"

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const hasGenres = props.item.genres && props.item.genres.length > 0
const isReading = props.item.readStatus === readStatus.READING
const linkAttrs = {
  href: props.item.url,
  target: "_blank",
  title: props.item.title,
}
</script>
