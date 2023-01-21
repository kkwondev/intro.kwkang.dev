<template>
  <p>PROJECT 페이지</p>
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
