<template>
  <div class="mx-auto">
    <TheHero
      label="Project"
      title="Jr.DevJobs"
      subtitle="Jobs for Junior Developers"
      image="/images/projects/hero-jrdevjobs.png"
      :styles="currentStyle.hero"
    />
    <div :style="{ background: currentStyle.backgroundColor }">
      <div class="px-4 pt-24 md:pt-16 pb-8 mx-auto max-w-5xl">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 md:pr-12 mb-6 md:mb-0">
            <div @click="toggleDarkMode" :class="currentStyle.headingColor" class="text-lg tracking-wider uppercase mb-1">Elevator Pitch</div>
            <p :class="currentStyle.paragraphColor" class="leading-relaxed">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here, content here', making it look like
              readable English
            </p>
          </div>
          <div class="w-full md:w-1/3">
            <div class="mb-6">
              <div :class="currentStyle.headingColor" class="text-lg tracking-wider uppercase">Logo</div>
              <img src="/images/projects/logo-jrdevjobs.png" class="w-full pt-1" />
            </div>
            <div>
              <div :class="currentStyle.headingColor" class="text-lg tracking-wider uppercase">Color Palette</div>
              <ColorPalette
                :colors="['#e49135', '#525252', '#fff']"
                labelClass="text-xs text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 md:mt-0 bg-white pt-10 pb-32">
      <div class="flex flex-wrap-reverse md:flex-wrap items-center max-w-5xl mx-auto px-4">
        <div class="w-full md:w-1/2 md:px-6 md:mb-0">
          <div class="relative">
            <div class="text-sm text-orange-500 tracking-wider uppercase">Features</div>
            <div class="text-4xl text-gray-700 mb-1">Job Search</div>
            <div class="text-base text-gray-600">
              The primary function of the website is searching for a job.
              We built a fancy <span class="text-orange-500">full-text search engine</span> allowing job seekers to find
              a job matching their skillset and location.
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <img src="/images/projects/project-highlights-search-jrdevjobs.png" class="mb-5 mx-auto md:mx-0 md:my-5 relative">
        </div>
      </div>
    </div>

    <div style="background: #525252;" class="mb-0 md:mb-20">
      <svg class="-my-10" width="100%" height="80" viewBox="0 0 500 80" preserveAspectRatio="none">
        <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#fff"/>
      </svg>
      <div class="flex flex-wrap items-center max-w-5xl mx-auto px-4">
        <div class="w-full md:w-1/2 -mb-0 -mt-20 md:-mb-20">
          <img src="/images/projects/project-highlights-perspective-jrdevjobs.png" class="mx-auto md:mx-0 md:my-5 relative">
        </div>
        <div class="w-full md:w-1/2 mb-10 md:mb-0">
          <div class="bg-white p-4 rounded shadow-md relative">
            <div class="text-sm text-orange-500 tracking-wider uppercase">Features</div>
            <div class="text-4xl text-gray-700 mb-1">Custom Profiles</div>
            <div class="text-base text-gray-600">
              We built beautiful profiles for both <span class="text-orange-500">job seekers</span>
              and <span class="text-orange-500">companies</span>! Each had custom colors, avatars,
              and content. Job seekers could show off their projects, education, and code samples,
              while companies could show off their culture, benefits, and open positions.
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
        backgroundColors: ['#f18d04', '#f1ca95'],
        titleColor: 'text-white',
        labelColor: 'text-orange-700',
        swirlColor: '#f7fafc'
      },
      backgroundColor: '#f7fafc',
      headingColor: 'text-gray-500',
      paragraphColor: 'text-gray-700'
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
