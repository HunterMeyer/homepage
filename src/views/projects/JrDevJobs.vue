<template>
  <div class="mx-auto">
    <section class="hero-bg mb-10 sm:mb-0">
      <div class="flex flex-wrap mx-auto max-w-5xl px-4">
        <div class="w-full sm:w-1/2 self-center pb-2 pt-10 sm:pt-2">
          <div class="text-center text-white">
            <p class="leading-none font-thin uppercase text-teal-200" style="letter-spacing:1rem;">Project</p>
            <h1 class="text-6xl font-semibold leading-none">Jr.DevJobs</h1>
            <h2 class="text-3xl font-thin leading-none">Jobs for Junior Developers</h2>
          </div>
        </div>
        <div class="w-full sm:w-1/2 self-center -mb-32">
          <div class="relative">
            <img alt="Image placeholder" src="/images/iphone.png" class="mx-auto" style="max-width:90%; height:auto">
          </div>
        </div>
      </div>
      <div style="fill: #f7fafc;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 220" preserveAspectRatio="none" class="ie-shape-wave-3">
          <path d="M918.34,99.41C388.23,343.6,47.11,117.12,0,87.54V220H1600V87.54C1378.72-76.71,1077.32,27.41,918.34,99.41Z"></path>
        </svg>
      </div>
    </section>
    <div class="px-4 py-8 mx-auto max-w-5xl">
      <div class="flex flex-wrap">
        <div class="w-full md:w-2/3 px-2 mb-4 md:mb-0">
          <div class="mb-4">
            <h2 class="text-3xl mb-2 text-gray-700">Elevator Pitch</h2>
            <p class="text-gray-600">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here, content here', making it look like
              readable English
            </p>
          </div>
          <div>
            <h2 class="text-3xl mb-2 text-gray-700">Features</h2>
            <p class="text-gray-600">
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
</template>

<script>
import ColorPalette from '@/components/ColorPalette'
export default {
  name: 'JrDevJobs',
  components: {
    ColorPalette
  },
  metaInfo: {
    title: 'Jr.DevJobs Project',
    titleTemplate: '%s | '+ process.env.VUE_APP_TITLE
  }
}
</script>

<style>
  .hero-bg {
    background: linear-gradient(50deg, #63c3da, #81e6d9);
  }
</style>