<template>
  <Header />
  <div class="max-w-[1200px] mx-auto moblie:px-4">
    <slot />
  </div>
</template>
<script setup lang="ts">
import Header from "./Header.vue";
</script>
