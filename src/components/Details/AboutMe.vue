<template>
  <BaseCard class="flex flex-col gap-6 text-black md:pt-24 dark:text-white">
    <header class="flex flex-col gap-4 md:hidden">
      <h2 class="text-3xl font-bold">About me</h2>
      <Strike />
    </header>

    <section class="flex flex-col gap-4 font-light">
      <p>
        <span class="font-bold">Hi there!</span> I am a results-driven full-stack software engineer
        with a decade of experience. I am adept at instituting high-quality coding standards and
        architecture, resulting in improved performance, reliability, scalability, and product
        quality. Proven success in leadership with a track record of delivering impactful changes.
      </p>

      <p>
        <span class="font-bold">What else?</span> I'm a husband, father, traveler, terrible guitar
        player, and I love the drums.
      </p>

      <p>
        I also invest in building fast-growing technology companies, with my wife over at
        <a
          href="https://www.meyervisions.com"
          target="_blank"
          title="Meyer Visions"
          class="whitespace-nowrap rounded-md font-bold underline hover:text-yellow-500"
        >
          Meyer Visions </a
        >.
      </p>

      <br />
      <p>Thanks for stopping by 👋</p>
    </section>
  </BaseCard>
</template>

<script setup>
import Strike from "@/components/Strike.vue"
import BaseCard from "../BaseCard.vue"
</script>
