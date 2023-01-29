<template>
  <div class="border-[1px] rounded-md border-gray-100 p-5 min-h-[200px]">
    <div class="h-32 flex items-center justify-center" v-if="props.image">
      <img
        :src="props.image"
        alt="logo"
        class="max-w-[40%] block min-w-[30%]"
      />
    </div>
    <div class="flex flex-col mb-5">
      <h3
        class="mb-3 text-2xl font-bold leading-8 tracking-[-1.5px] tablet:text-xl moblie:text-lg"
      >
        {{ props.name }}
        <span
          class="text-gray-500 text-lg font-normal mr-1 tablet:text-sm moblie:text-xs"
          >{{ props.subName }}</span
        >
        <span
          class="px-2 text-white text-xs font-normal moblie:text-[10px]"
          :class="!props.isComplete ? 'bg-red-500' : 'bg-green-300'"
          >{{ props.isComplete ? "완료" : "진행중" }}</span
        >
      </h3>
      <p class="tracking-[-1.1px] text-gray-500 tablet:text-sm">
        {{ props.dest }}
      </p>
    </div>
    <div class="text-3xl cursor-pointer tablet:text-2xl flex gap-2">
      <Icon
        v-if="props.pageUrl"
        icon="mdi-light:home"
        @Click="onLinkRedirect(props.pageUrl)"
      />
      <Icon
        v-if="props.githubUrl"
        icon="mdi:github"
        @Click="onLinkRedirect(props.githubUrl)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";

const onLinkRedirect = (link: string) => {
  window.open(link, "_blank");
};

const props = defineProps<{
  name: string;
  image: string;
  subName: string;
  isComplete: boolean;
  dest: string;
  pageUrl: string;
  githubUrl: string;
}>();
</script>
