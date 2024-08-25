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
      <TheThemer />
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>
      <SocialLinks />
    </div>
  </aside>
</template>

<script setup>
import TheThemer from "./TheThemer.vue"
import SocialLinks from "./Person/SocialLinks.vue"
</script>
