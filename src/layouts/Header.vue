<template>
  <div
    class="w-full h-20 font-[Quicksand] bg-white sticky top-0 tablet:h-auto tablet:border-[1px]"
  >
    <nav
      class="max-w-[1200px] mx-auto h-full flex justify-between items-center tablet:block tablet:p-2 tablet:pb-0 tablet:text-center px-2"
    >
      <h1 class="text-lg font-semibold -tracking-[1.3px] text-slate-900">
        <router-link to="/"> &lt;kwkang.dev/&gt; </router-link>
      </h1>
      <ul class="flex items-center h-full py-4">
        <li
          class="text-sm -tracking-wide tablet:block tablet:w-[33%] tablet:text-center px-4"
        >
          <!-- <router-link
            to="https://unruly-algebra-5f4.notion.site/2e211b9df81f473ca887d06afccaef1b"
            :class="
              route.name === 'about'
                ? 'font-semibold opacity-100'
                : 'font-light opacity-50'
            "
            >About</router-link
          > -->
          <p class="cursor-pointer" @click="aboutToNotion">About</p>
        </li>
        <li
          class="text-sm -tracking-wide tablet:block tablet:w-[33%] tablet:text-center px-4"
        >
          <!-- <router-link to="/post">Post</router-link> -->
          <p class="cursor-pointer" @click="aboutToBlog">Post</p>
        </li>
        <li
          class="text-sm -tracking-wide tablet:block tablet:w-[33%] tablet:text-center px-4"
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

const aboutToNotion = () => {
  window.open(
    "https://unruly-algebra-5f4.notion.site/2e211b9df81f473ca887d06afccaef1b",
    "_blank"
  );
};

const aboutToBlog = () => {
  window.open("https://blog.kwkang.dev", "_blank");
};
</script>
