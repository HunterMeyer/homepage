<template>
  <div class="flex flex-wrap">
    <div
      v-for="(color, index) in colors"
      :key="index"
      :class="wrapperClass"
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
    wrapperClass: {
      type: String,
      default: "w-1/3 p-2"
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
</style>

<docs>
Color Palette Example
```
<div class="bg-white rounded shadow-md">
  <ColorPalette :colors="['#e49135', '#fff', '#e6e6e6']" />
</div>
```
</docs>
