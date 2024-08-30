<template>
  <section class="
    pb-4
    relative
    [&:not(:last-child)]:before:content-['']
    [&:not(:last-child)]:before:absolute
    [&:not(:last-child)]:before:-left-11
    [&:not(:last-child)]:before:-top-4
    [&:not(:last-child)]:before:h-[calc(100%+2rem)]
    [&:not(:last-child)]:before:w-px
    [&:not(:last-child)]:before:bg-gray-200
    dark:[&:not(:last-child)]:before:bg-my-black-500
    after:content-['']
    after:absolute
    after:-left-12
    after:top-2.5
    after:h-2
    after:w-2
    after:bg-yellow-500
    after:rounded-full
    after:outline
    after:outline-4
    after:outline-white
    dark:after:outline-my-black-700
  ">
    <header>
      <h4 class="text-lg font-medium">
        <a
          :href="url"
          :title="title"
          target="_blank"
          class="transition-colors ease-in text-black dark:text-white hover:text-yellow-500 rounded-md"
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
