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
import { addIcons } from "oh-vue-icons"
import { CoExternalLink } from "oh-vue-icons/icons"

addIcons(CoExternalLink)

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const hasUrl = !!(props.item.url && props.item.url.length > 0)
const componentType = hasUrl ? "a" : "div"
const componentAttrs = hasUrl
  ? {
      href: props.item.url,
      target: "_blank",
      title: props.item.name,
    }
  : {
    class: "project-item-figure-wrapper",
  }
</script>
