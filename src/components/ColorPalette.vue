<template>
  <div class="flex flex-wrap">
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="color-palette w-1/3"
    >
      <div class="color-palette-color rounded shadow" :style="{ backgroundColor: color }"></div>
      <span :class="labelClass">{{ color }}</span>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'ColorPalette',
  props: {
    colors: {
      type: Array,
      required: true
    },
    labelClass: {
      type: String,
      default: "text-sm text-gray-600"
    }
  }
}
</script>

<style>
  .color-palette-color {
    padding-top: 50%;
  }
  .color-palette {
    @apply py-2 px-1;
  }
  .color-palette:first-child {
    @apply pr-2 pl-0;
  }
  .color-palette:last-child {
    @apply pr-0 pl-2;
  }
</style>

<docs>
Color Palette Example
```
<div class="bg-white rounded shadow-md">
  <ColorPalette :colors="['#e49135', '#fff', '#e6e6e6']" />
</div>
```
</docs>
