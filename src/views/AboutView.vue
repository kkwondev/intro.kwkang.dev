<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

onMounted(() => {
  alert(`${route.name?.toString()} 페이지는 준비중입니다.`);
  router.push("/");
});
</script>
