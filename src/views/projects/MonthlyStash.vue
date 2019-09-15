<template>
  <div class="mx-auto">
    <TheHero
      label="Project"
      title="MonthlyStash"
      subtitle="The Head Shop Subscription Box"
      image="/images/hero-monthlystash.png"
      :styles="currentStyle.hero"
    />
    <div :style="{ background: currentStyle.backgroundColor }">
      <div class="px-4 pt-16 pb-8 mx-auto max-w-5xl">
        <div class="flex flex-wrap text-">
          <div class="w-full md:w-2/3 px-2 mb-4 md:mb-0">
            <div class="mb-4">
              <h2 :class="currentStyle.headingColor" class="text-3xl mb-2" @click="toggleDarkMode">Elevator Pitch</h2>
              <p :class="currentStyle.paragraphColor">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like
                readable English
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <div class="bg-white rounded shadow-lg px-1">
              <div class="pb-5">
                <div class="text-sm tracking-wider text-gray-500 uppercase px-3 pt-3 pb-2">Color Palette</div>
                <div class="px-1">
                  <ColorPalette
                    :colors="['#55ab68', '#8e77cc', '#f5f5f5']"
                    labelClass="text-xs text-gray-600"
                  />
                </div>
              </div>
              <div class="pb-5">
                <div class="text-sm tracking-wider text-gray-500 uppercase px-3 pb-2">Logo</div>
                <div class="text-xs italic text-gray-500 px-3">Coming Soon...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="background: #8e77cc;" class="mb-0 mt-20 md:mb-20">
      <svg class="-my-10" width="100%" height="80" viewBox="0 0 500 80" preserveAspectRatio="none">
        <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#f7fafc"/>
      </svg>
      <div class="flex flex-wrap items-center max-w-5xl mx-auto px-4">
        <div class="w-full md:w-1/2 -mb-0 -mt-20 md:-mb-20">
          <img src="/images/hero-jrdevjobs.png" class="mx-auto md:mx-0 relative">
        </div>
        <div class="w-full md:w-1/2 px-2 mb-10 md:mb-0">
          <div class="bg-white p-4 rounded shadow-2xl">
            <div class="text-sm tracking-wider uppercase" style="color: #8e77cc;">Features</div>
            <div class="text-4xl text-gray-700 mb-1">Search Engine</div>
            <div class="text-base text-gray-600">
              Full-text search and easy filtering. We built a backend that automatically
              formats and extracts data such as location, education requirements, skills,
              and other requirements relevant to job hunting.
            </div>
          </div>
        </div>
      </div>
      <svg class="hidden md:block -my-10" width="100%" height="80" viewBox="0 0 500 80" preserveAspectRatio="none">
        <path d="M0,80 L0,40 Q250,0 500,40 L500,80 Z" fill="#f7fafc"/>
      </svg>
    </div>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero'
import ColorPalette from '@/components/ColorPalette'
export default {
  name: 'JrDevJobs',
  components: {
    TheHero,
    ColorPalette
  },
  data() {
    return {
      darkMode: false
    }
  },
  computed: {
    currentStyle() {
      const styles = this.$options.styles
      return this.darkMode ? styles.dark : styles.light
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    }
  },
  styles:{
    light: {
      hero: {
        backgroundColors: ['#1e9650', '#a7fdc9'],
        titleColor: 'text-white',
        labelColor: 'text-green-200',
        swirlColor: '#f7fafc'
      },
      backgroundColor: '#f7fafc',
      headingColor: 'text-gray-700',
      paragraphColor: 'text-gray-600'
    },
    dark: {
      hero: {
        backgroundColors: ['#1d0b35', '#140748'],
        titleColor: 'text-indigo-500',
        labelColor: 'text-indigo-700',
        swirlColor: '#21103e'
      },
      backgroundColor: '#21103e',
      headingColor: 'text-indigo-500',
      paragraphColor: 'text-indigo-100'
    }
  },
  metaInfo: {
    title: 'MonthlyStash',
    titleTemplate: '%s | ' + process.env.VUE_APP_TITLE + ' Projects'
  },
}
</script>
