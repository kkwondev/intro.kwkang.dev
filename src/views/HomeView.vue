1
<template>
  <div class="flex gap-10 flex-col flex-1 justify-center">
    <div class="w-[30%] tablet:w-[100%] tablet:flex tablet:justify-center">
      <img
        src="@/assets/common/my.jpeg"
        alt="my"
        class="block rounded-full w-28 h-28 tablet:w-28 tablet:h-28 moblie:w-20 moblie:h-20"
      />
    </div>
    <div>
      <h2
        class="font-nanum -tracking-[1.8px] font-semibold text-3xl leading-normal mb-5 tablet:text-center tablet:text-[20px] moblie:text-[16px]"
      >
        안녕하세요! 👋, <br />
        <span class="text-green-400 text-5xl moblie:text-2xl">
          {{ yearCalculation }}</span
        >
        년차 웹 개발자 강경원 입니다.
      </h2>
      <div
        class="font-nanum -tracking-[1.5px] text-base tablet:text-center tablet:text-[16px] moblie:text-[14px] mb-10"
      >
        <p class="leading-8">
          문제를 해결하기 위해 노력하고 열정을 가진
          <strong>웹 개발자</strong> 입니다. <br />
          현재는 <strong>Node.js</strong>로 백엔드 개발을 진행하고 있습니다.
        </p>
      </div>
      <div
        class="text-5xl cursor-pointer tablet:text-4xl tablet:flex tablet:justify-center"
      >
        <Icon icon="mdi:github" @click="myGithubRedirect" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import dayjs from "dayjs";

const yearCalculation = computed(() => {
  const currentYear = dayjs().format("YYYY");
  const startDevelopYear = dayjs("2021-07-01").format("YYYY");

  return +currentYear - +startDevelopYear + 1;
});

const myGithubRedirect = (): void => {
  window.open("https://github.com/kkwondev", "_blank");
};
</script>
