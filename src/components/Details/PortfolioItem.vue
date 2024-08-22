<template>
  <li class="project-item active">
    <component
      :is="componentType"
      v-bind="componentAttrs"
    >
      <figure class="project-img">
        <div v-if="hasUrl" class="project-item-icon-box">
          <v-icon name="co-external-link" />
        </div>
        <img
          :src="item.image_url"
          :alt="item.name"
          :style="item.css"
          loading="lazy"
        >
      </figure>
      <h3 class="project-title">{{ item.name }}</h3>
      <p class="project-category">{{ item.caption }}</p>
    </component>
  </li>
</template>

<script setup>
import { computed } from "vue"
import { addIcons } from "oh-vue-icons"
import { CoExternalLink } from "oh-vue-icons/icons"

addIcons(CoExternalLink)

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const hasUrl = computed(() => {
  return !!(props.item.url && props.item.url.length > 0)
})

const componentType = computed(() => {
  return hasUrl.value ? "a" : "div"
})

const componentAttrs = computed(() => {
  if (hasUrl.value) {
    return {
      href: props.item.url,
      target: "_blank",
    }
  } else {
    return {
      class: "project-item-figure-wrapper",
    }
  }
})
</script>
