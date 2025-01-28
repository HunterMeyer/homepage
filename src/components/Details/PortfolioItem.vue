<template>
  <section class="animate-scale-up">
    <component
      :is="componentType"
      v-bind="componentAttrs"
      class="group flex flex-col gap-2 rounded-2xl"
    >
      <figure
        :class="{ 'before:group-hover:group-hover:bg-black/50': hasUrl }"
        class="relative h-56 w-full overflow-hidden rounded-2xl shadow-xl before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-transparent before:transition-all before:duration-200 before:ease-in-out before:content-[''] md:h-44"
      >
        <div
          v-if="hasUrl"
          class="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-2xl bg-white text-yellow-500 opacity-0 shadow-lg transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 dark:bg-my-black-700/85"
        >
          <i class="ri-external-link-line text-xl" />
        </div>
        <img
          :src="item.imageUrl"
          :alt="item.name"
          :style="item.css"
          :class="{ 'group-hover:scale-110': hasUrl }"
          class="h-full w-full object-cover transition-all duration-200 ease-in-out"
          loading="lazy"
        />
      </figure>
      <header class="ml-1">
        <h3
          :class="{ 'group-hover:text-yellow-500': hasUrl }"
          class="text-lg font-medium"
        >
          {{ item.name }}
        </h3>
        <p class="text-base font-light text-my-black-300 dark:text-gray-300">
          {{ item.caption }}
        </p>
      </header>
    </component>
  </section>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const hasUrl = !!(props.item.url && props.item.url.length > 0)
const componentType = hasUrl ? "a" : "div"
const componentAttrs = hasUrl && {
  href: props.item.url,
  target: "_blank",
  title: props.item.name,
}
</script>
