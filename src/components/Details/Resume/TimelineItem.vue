<template>
  <section
    class="relative pb-4 after:absolute after:-left-12 after:top-2.5 after:h-2 after:w-2 after:rounded-full after:bg-yellow-500 after:outline after:outline-4 after:outline-white after:content-[''] dark:after:outline-my-black-700 [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:-left-11 [&:not(:last-child)]:before:-top-4 [&:not(:last-child)]:before:h-[calc(100%+2rem)] [&:not(:last-child)]:before:w-px [&:not(:last-child)]:before:bg-gray-200 [&:not(:last-child)]:before:content-[''] dark:[&:not(:last-child)]:before:bg-my-black-500"
  >
    <header>
      <h4 class="text-lg font-medium">
        <a
          :href="url"
          :title="title"
          target="_blank"
          class="rounded-md text-black transition-colors ease-in hover:text-yellow-500 dark:text-white"
        >
          {{ title }}
        </a>
      </h4>
    </header>
    <p class="text-md font-light text-my-black-300 dark:text-my-black-200">{{ subtitle }}</p>
    <p class="text-md text-yellow-500">{{ dates }}</p>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>
