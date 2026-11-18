<template>
  <div class="md:sticky md:top-4 md:z-20 md:mb-8 lg:top-10">
    <!-- Blurs content scrolling through the gap above the sticky nav -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-10 h-[calc(2.5rem+50%)] backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_55%,transparent)] max-md:hidden"
    ></div>
    <nav
      aria-label="Sections"
      class="md:panel max-md:fixed max-md:inset-x-0 max-md:bottom-0 max-md:z-20 max-md:border-t max-md:border-neon-cyan/20 max-md:bg-arcade-900/85 max-md:px-2 max-md:pb-[max(0.5rem,env(safe-area-inset-bottom))] max-md:pt-2 max-md:shadow-[0_-12px_32px_rgb(0_0_0/0.5)] max-md:backdrop-blur-lg md:relative md:p-1.5"
    >
      <div class="flex flex-row gap-1 md:gap-1.5">
        <a
          v-for="(item, index) in items"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ active: item.id === activeItemId }"
          :aria-current="item.id === activeItemId ? 'location' : undefined"
          :aria-keyshortcuts="String(index + 1)"
          :title="`${item.title} (press ${index + 1})`"
          class="group flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-transparent px-2 py-1.5 text-arcade-300 transition duration-200 hover:bg-white/5 hover:text-white md:flex-row md:gap-2 md:py-2.5 [&.active]:border-neon-cyan/50 [&.active]:bg-neon-cyan/10 [&.active]:text-neon-cyan [&.active]:shadow-glow-sm"
          @click="handleClick($event, item)"
        >
          <i
            :class="item.icon"
            class="text-lg leading-none md:text-base"
            aria-hidden="true"
          />
          <span
            class="font-display text-[0.65rem] font-semibold uppercase tracking-wider md:text-xs"
          >
            <span class="opacity-50 max-lg:hidden">0{{ index + 1 }}&nbsp;</span>{{ item.title }}
          </span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  activeItemId: {
    type: [String, Number],
    required: true,
  },
})

const emit = defineEmits(["itemSelect"])

const handleClick = (event, item) => {
  // Let modified clicks through (e.g. Cmd/Ctrl-click to open in a new tab)
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

  // The parent handles the scroll and history; see useScrollSpy's goTo
  event.preventDefault()
  emit("itemSelect", item)
}
</script>
