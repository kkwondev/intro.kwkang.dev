<template>
  <div class="w-full h-20 font-[Quicksand] bg-white sticky top-0">
    <nav
      class="max-w-[1200px] mx-auto h-full flex justify-between items-center tablet:block tablet:p-2 tablet:text-center px-2"
    >
      <h1 class="text-lg font-semibold -tracking-[1.3px] text-slate-900">
        <router-link to="/"> &lt;kwkang.dev/&gt; </router-link>
      </h1>
      <ul class="flex items-center h-full">
        <li
          class="px-10 text-sm -tracking-wide tablet:block tablet:w-[33%] tablet:text-center"
        >
          <router-link
            to="/about"
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
          class="px-10 text-sm -tracking-wide tablet:block tablet:w-[33%] tablet:text-center"
          :class="
            route.name === 'post'
              ? 'font-semibold opacity-100'
              : 'font-light opacity-50'
          "
        >
          <router-link to="/post">Post</router-link>
        </li>
        <li
          class="px-10 text-sm -tracking-wide tablet:block tablet:w-[33%] tablet:text-center"
          :class="
            route.name === 'project'
              ? 'font-semibold opacity-100'
              : 'font-light opacity-50'
          "
        >
          <router-link to="/project">Project</router-link>
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
