<template>
  <article class="about">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <section class="about-text">
      <p>
        <b>Hi there!</b> I am a results-driven full-stack software engineer with a decade
        of experience. I am adept at instituting high-quality coding standards and architecture,
        resulting in improved performance, reliability, scalability, and product quality.
        Proven success in leadership with a track record of delivering impactful changes.
      </p>

      <p>
        <b>What else?</b> I'm a husband, father, traveler, terrible guitar player,
        and I love the drums.
      </p>

      <p>
        I also invest in building fast-growing technology companies, with my wife over at
        <a v-bind="meyerVisionsLinkAttrs"><b>Meyer Visions</b></a>.
      </p>

      <br>
      <p>Thanks for stopping by 👋</p>

      <div class="separator" style="opacity: 1;"></div>

      <div class="template-attribution">
        Theme inspired by <a v-bind="templateLinkAttrs">codewithsadee</a>.
      </div>
    </section>
  </article>
</template>

<script setup>
const meyerVisionsLinkAttrs = {
  href: "https://www.meyervisions.com",
  target: "_blank",
  title: "Meyer Visions",
  class: "about-link",
}
const templateLinkAttrs = {
  href: "https://github.com/codewithsadee/vcard-personal-portfolio",
  target: "_blank",
  title: "Template source credit",
  class: "about-link",
}
</script>
