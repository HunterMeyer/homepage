<template>
  <div class="mx-auto">
    <div class="flex">
      <div class="w-full py-10 text-center">
        <h1 class="text-4xl leading-none">Jr.DevJobs</h1>
        <div class="text-sm text-gray-500 mt-3">Jobs for Junior Developers</div>
      </div>
    </div>
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
