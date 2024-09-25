<template>
  <section
    class="relative pb-4 before:absolute before:-left-11 before:h-full before:w-px before:bg-gray-200 before:content-[''] after:absolute after:-left-12 after:top-2.5 after:h-2 after:w-2 after:rounded-full after:bg-yellow-500 after:outline after:outline-4 after:outline-white after:content-[''] dark:before:bg-yellow-200/10 dark:after:bg-yellow-300 dark:after:outline-yellow-200/10 [&:first-child]:before:-top-4 [&:first-child]:before:h-[calc(100%+1rem)] [&:last-child]:before:h-2"
  >
    <header>
      <h4 class="text-lg font-medium">
        <a
          :href="url"
          :title="title"
          target="_blank"
          class="rounded-md text-black hover:text-yellow-500 dark:text-white"
        >
          {{ title }}
        </a>
      </h4>
    </header>
    <p class="text-md font-light text-my-black-300 dark:text-gray-300">{{ subtitle }}</p>
    <p class="text-md text-yellow-500 dark:text-yellow-400/80">{{ dates }}</p>
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
