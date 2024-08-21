<template>
  <li class="project-item active">
    <a
      :href="item.url"
      :target="hasUrl && '_blank'"
      @click="handleClick"
    >
      <figure class="project-img">
        <div v-if="item.url" class="project-item-icon-box">
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
    </a>
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

const handleClick = (event) => {
  if (!hasUrl.value) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }
}
</script>
