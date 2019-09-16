<template>
  <section :style="{ background: backgroundColors }">
    <div class="flex flex-wrap mx-auto max-w-5xl px-6">
      <div class="w-full sm:w-1/2 self-center pb-2 pt-10 sm:pt-2">
        <div :class="titleColor" class="text-center">
          <p v-if="label" :class="labelColor" class="leading-none font-thin uppercase" style="letter-spacing:1rem;margin-left:1rem;">{{ label }}</p>
          <h1 class="text-5xl md:text-6xl font-semibold leading-none mb-1">{{ title }}</h1>
          <h2 v-if="subtitle" class="text-3xl font-thin leading-none">{{ subtitle }}</h2>
        </div>
      </div>
      <div class="w-full sm:w-1/2 self-center -mb-32">
        <div class="relative">
          <img :src="image" class="mx-auto" style="max-width:90%; height:auto">
        </div>
      </div>
    </div>
    <div :style="{ fill: swirlColor }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 220" preserveAspectRatio="none">
        <path d="M918.34,99.41C388.23,343.6,47.11,117.12,0,87.54V220H1600V87.54C1378.72-76.71,1077.32,27.41,918.34,99.41Z"></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHero',
  props: {
    label: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    image: {
      type: String
    },
    styles: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    backgroundColors() {
      const colors = this.styles.backgroundColors || ['#63c3da', '#81e6d9']
      const colorA = colors[0]
      const colorB = colors[1] || colorA
      return "linear-gradient(50deg, " + colorA + ", " + colorB + ")"
    },
    labelColor() {
      return this.styles.labelColor || 'text-teal-200'
    },
    titleColor() {
      return this.styles.titleColor || 'text-white'
    },
    swirlColor() {
      return this.styles.swirlColor || '#f7fafc'
    }
  }
}
</script>

<docs>
`TheHero` Example
```
<TheHero
  label="Label"
  title="Title Text"
  subtitle="Subtitle Text"
  image="https://www.nowfindglutenfree.com/wp-content/uploads/sites/2/2018/03/iphone-x-mockup-against-transparent-background-a17152.png"
  :styles="{
    backgroundColors: ['#7144ca', '#bb9df7'],
    labelColor: 'text-gray-300',
    titleColor: 'text-white',
    swirlColor: '#fff'
  }"
/>
```
</docs>