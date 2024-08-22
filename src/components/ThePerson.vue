<template>
  <aside class="sidebar active">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/profile-pic.webp" alt="Hunter Meyer" width="80">
      </figure>
      <div class="info-content">
        <h1 class="name" title="Hunter Meyer">Hunter Meyer</h1>
        <p class="title">Software Engineer</p>
      </div>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>
      <ul class="social-list">
        <li class="social-item"
          v-for="(link, index) in socialLinks"
          :key="index"
        >
          <a
            :href="link.url"
            :title="link.title"
            target="_blank"
            class="social-link"
          >
            <v-icon :name="link.icon" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { addIcons } from "oh-vue-icons"
import { CoLinkedinIn, CoGithub, CoStackoverflow } from "oh-vue-icons/icons"

addIcons(CoLinkedinIn, CoGithub, CoStackoverflow)

const socialLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/hrmeyer",
    icon: "co-linkedin-in",
  },
  {
    title: "Github",
    url: "https://github.com/huntermeyer",
    icon: "co-github",
  },
  {
    title: "Stack Overflow",
    url: "https://stackoverflow.com/users/1953904/hunter",
    icon: "co-stackoverflow",
  },
]
</script>
