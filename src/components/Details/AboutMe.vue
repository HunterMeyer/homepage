<template>
  <div data-component="card" class="w-full rounded-3xl p-8 shadow-lg bg-white dark:bg-my-black-700">
    <article class="flex flex-col gap-6 text-black dark:text-white">
      <header class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold">About me</h2>
        <Strike />
      </header>

      <section class="flex flex-col gap-4 font-light">
        <p>
          <span class="font-bold">Hi there!</span> I am a results-driven full-stack software engineer with a decade
          of experience. I am adept at instituting high-quality coding standards and architecture,
          resulting in improved performance, reliability, scalability, and product quality.
          Proven success in leadership with a track record of delivering impactful changes.
        </p>

        <p>
          <span class="font-bold">What else?</span> I'm a husband, father, traveler, terrible guitar player,
          and I love the drums.
        </p>

        <p>
          I also invest in building fast-growing technology companies, with my wife over at
          <a v-bind="meyerVisionsLinkAttrs">Meyer Visions</a>.
        </p>

        <br>
        <p>Thanks for stopping by 👋</p>
      </section>
    </article>
  </div>
</template>

<script setup>
import Strike from "@/components/Strike.vue"

const meyerVisionsLinkAttrs = {
  href: "https://www.meyervisions.com",
  target: "_blank",
  title: "Meyer Visions",
  class: "font-bold transition-colors ease-in hover:text-yellow-500 underline whitespace-nowrap rounded-md",
}
</script>
