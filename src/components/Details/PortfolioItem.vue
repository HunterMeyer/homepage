<template>
  <section class="animate-scale-up">
    <component :is="componentType" v-bind="componentAttrs" class="flex flex-col gap-2 group rounded-2xl">
      <figure
        :class="{ 'before:group-hover:group-hover:bg-black/50': hasUrl }"
        class="
          relative
          rounded-2xl
          w-full
          h-56
          md:h-44
          overflow-hidden
          shadow-xl
          before:content-['']
          before:absolute
          before:top-0
          before:left-0
          before:w-full
          before:h-full
          before:z-10
          before:bg-transparent
          before:transition-all
          before:duration-200
          before:ease-in-out
        "
      >
        <div
          v-if="hasUrl"
          class="
            flex
            justify-center
            items-center
            bg-white
            dark:bg-my-black-500
            text-yellow-500
            shadow-lg
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            scale-75
            group-hover:scale-100
            h-14
            w-14
            z-10
            rounded-2xl
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-200
            ease-in-out
          "
        >
          <v-icon name="co-external-link" />
        </div>
        <img
          :src="item.imageUrl"
          :alt="item.name"
          :style="item.css"
          :class="{ 'group-hover:scale-110': hasUrl }"
          class="
            w-full
            h-full
            transition-all duration-200 ease-in-out
            object-cover
          "
          loading="lazy"
        >
      </figure>
      <header class="ml-1">
        <h4
          :class="{ 'group-hover:text-yellow-500': hasUrl }"
          class="text-lg font-medium transition-colors ease-in-out"
        >
          {{ item.name }}
        </h4>
        <p class="text-md font-light text-my-black-300 dark:text-my-black-200">{{ item.caption }}</p>
      </header>
    </component>
  </section>
</template>

<script setup>
import { addIcons } from "oh-vue-icons"
import { CoExternalLink } from "oh-vue-icons/icons"

addIcons(CoExternalLink)

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const hasUrl = !!(props.item.url && props.item.url.length > 0)
const componentType = hasUrl ? "a" : "div"
const componentAttrs = hasUrl &&
  {
    href: props.item.url,
    target: "_blank",
    title: props.item.name,
  }
</script>
