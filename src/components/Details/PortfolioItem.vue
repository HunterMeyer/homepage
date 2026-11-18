<template>
  <component
    :is="componentType"
    v-bind="componentAttrs"
    :class="
      hasUrl
        ? 'hover:-translate-y-1 hover:border-neon-cyan/60 hover:shadow-glow'
        : 'opacity-80'
    "
    class="group flex animate-scale-up flex-col overflow-hidden rounded-2xl border border-white/10 bg-arcade-950/60 transition duration-200"
  >
    <figure class="crt aspect-[16/10] overflow-hidden border-b border-white/10 bg-arcade-950">
      <img
        :src="item.imageUrl"
        :alt="item.name"
        :style="item.css"
        :class="{ 'group-hover:scale-105': hasUrl }"
        class="h-full w-full object-cover transition duration-300 ease-out"
        loading="lazy"
      />
      <span
        v-if="hasUrl"
        aria-hidden="true"
        class="absolute right-3 top-3 z-10 flex h-9 w-9 translate-y-1 items-center justify-center rounded-xl border border-neon-cyan/50 bg-arcade-900/90 text-neon-cyan opacity-0 shadow-glow-sm transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
      >
        <i class="ri-arrow-right-up-line text-lg" />
      </span>
    </figure>

    <div class="flex flex-1 flex-col gap-3 p-4">
      <header>
        <h3
          :class="{ 'group-hover:text-neon-cyan': hasUrl }"
          class="font-display text-sm font-bold uppercase tracking-wider text-white transition"
        >
          {{ item.name }}
        </h3>
        <p class="mt-1 text-sm text-arcade-300">{{ item.caption }}</p>
      </header>
      <div class="mt-auto">
        <BaseBadge :variant="tag.variant">
          <i
            :class="tag.icon"
            aria-hidden="true"
          />{{ tag.label }}
        </BaseBadge>
      </div>
    </div>
  </component>
</template>

<script setup>
import BaseBadge from "@/components/BaseBadge.vue"

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

const tag = !hasUrl
  ? { label: "Archived", icon: "ri-archive-line", variant: "muted" }
  : props.item.url.includes("github.com")
    ? { label: "Source", icon: "ri-github-fill", variant: "cyan" }
    : { label: "Live", icon: "ri-signal-tower-line", variant: "magenta" }
</script>
