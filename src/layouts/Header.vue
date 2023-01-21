<template>
  <div class="w-full h-20 font-[Quicksand] fixed">
    <nav
      class="max-w-[1200px] mx-auto h-full flex justify-between items-center"
    >
      <h1 class="text-lg font-semibold -tracking-[1.3px] text-slate-900">
        <router-link to="/"> &lt;kwkang.dev/&gt; </router-link>
      </h1>
      <ul class="flex items-center h-full">
        <li class="px-10 text-sm -tracking-wide">
          <router-link
            @click="comingsoonAlert"
            to="/"
            :class="
              route.name === 'about'
                ? 'font-semibold opacity-100'
                : 'font-light opacity-50'
            "
            >About</router-link
          >
          <!-- <p @click="comingsoonAlert">About</p> -->
        </li>
        <li
          class="px-10 text-sm -tracking-wide"
          :class="
            route.name === 'post'
              ? 'font-semibold opacity-100'
              : 'font-light opacity-50'
          "
        >
          <router-link to="/" @click="comingsoonAlert">Post</router-link>
        </li>
        <li
          class="px-10 text-sm -tracking-wide"
          :class="
            route.name === 'project'
              ? 'font-semibold opacity-100'
              : 'font-light opacity-50'
          "
        >
          <router-link to="/" @click="comingsoonAlert">Project</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const comingsoonAlert = () => {
  alert("준비중입니다.");
};
</script>
