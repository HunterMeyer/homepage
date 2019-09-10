<template>
  <div class="mx-auto">
    <TheHero
      label="Project"
      title="Jr.DevJobs"
      subtitle="Jobs for Junior Developers"
      image="/images/iphone.png"
      :styles="currentStyle.hero"
    />
    <div :style="{ background: currentStyle.backgroundColor }">
      <div class="px-4 pt-16 pb-8 mx-auto max-w-5xl">
        <div class="flex flex-wrap">
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
            <div>
              <h2 :class="currentStyle.headingColor" class="text-3xl mb-2">Features</h2>
              <p :class="currentStyle.paragraphColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit<br>
                sed do eiusmod tempor incididunt ut labore<br>
                Ut enim ad minim veniam<br>
                quis nostrud exercitation ullamco laboris nisi ut aliquip<br>
                Duis aute irure dolor in reprehenderi<br>
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <div class="bg-white rounded shadow-lg px-1">
              <div class="pb-5">
                <div class="text-sm tracking-wider text-gray-500 px-3 pt-3 pb-2">Color Palette</div>
                <div class="px-1">
                  <ColorPalette
                    :colors="['#e49135', '#fff', '#e6e6e6']"
                    labelClass="text-xs text-gray-600"
                  />
                </div>
              </div>
              <div class="pb-5">
                <div class="text-sm tracking-wider text-gray-500 px-3 pb-2">Font Family</div>
                <div style="font-size: 60px" class="px-3 leading-none">
                  Spinnaker
                </div>
              </div>
              <div class="pb-5">
                <div class="text-sm tracking-wider text-gray-500 px-3 pb-2">Logo</div>
                <div class="italic text-gray-500 px-3">Coming Soon...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        backgroundColors: ['#63c3da', '#81e6d9'],
        titleColor: 'text-white',
        labelColor: 'text-teal-200',
        swirlColor: '#f7fafc'
      },
      backgroundColor: '#f7fafc',
      headingColor: 'text-gray-700',
      paragraphColor: 'text-gray-600'
    },
    dark: {
      hero: {
        backgroundColors: ['#0b2d35', '#074840'],
        titleColor: 'text-teal-500',
        labelColor: 'text-teal-700',
        swirlColor: '#052725'
      },
      backgroundColor: '#052725',
      headingColor: 'text-teal-500',
      paragraphColor: 'text-teal-100'
    }
  },
  metaInfo: {
    title: 'Jr.DevJobs',
    titleTemplate: '%s | ' + process.env.VUE_APP_TITLE + ' Projects'
  },
}
</script>
