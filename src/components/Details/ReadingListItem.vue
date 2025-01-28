<template>
  <section class="animate-scale-up">
    <div class="grid grid-cols-3 gap-6 rounded-2xl">
      <a
        v-bind="linkAttrs"
        class="group col-span-1"
      >
        <figure
          class="relative overflow-hidden rounded-2xl shadow-xl before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-transparent before:transition-all before:duration-200 before:ease-in-out before:content-[''] before:group-hover:bg-black/50"
        >
          <div
            class="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-2xl bg-white text-yellow-500 opacity-0 shadow-lg transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 dark:bg-my-black-700/85"
          >
            <i class="ri-external-link-line text-xl" />
          </div>
          <img
            :src="item.imageUrl"
            :alt="item.title"
            :style="{ 'object-position': 'center top' }"
            class="h-full w-full object-cover transition-all duration-200 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </figure>
      </a>
      <header class="col-span-2">
        <h3 class="text-lg font-medium hover:text-yellow-500">
          <a v-bind="linkAttrs">
            {{ item.title }}
          </a>
        </h3>
        <p class="text-base font-light text-my-black-300 dark:text-gray-300">
          {{ item.author }}
        </p>
        <p class="mt-2 text-xs text-my-black-300 md:text-base dark:text-gray-300">
          {{ item.description }}
        </p>
        <div
          v-if="hasGenres"
          class="mt-2 flex flex-wrap gap-2 md:mt-4"
        >
          <BaseBadge
            v-for="(genre, index) in item.genres"
            :title="genre"
            :key="index"
          />
        </div>
      </header>
    </div>
  </section>
</template>

<script setup>
import BaseBadge from "../BaseBadge.vue"
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const hasGenres = props.item.genres && props.item.genres.length > 0
const linkAttrs = {
  href: props.item.url,
  target: "_blank",
  title: props.item.name,
}
</script>
