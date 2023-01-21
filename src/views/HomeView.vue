<template>
  <div
    class="flex gap-10 justify-center items-center h-[100vh] tablet:flex-col"
  >
    <div class="w-[30%] tablet:w-[100%] tablet:flex tablet:justify-center">
      <img
        src="@/assets/common/my.jpeg"
        alt="my"
        class="block rounded-full w-48 h-48 tablet:w-30 tablet:h-30 moblie:w-24 moblie:h-24"
      />
    </div>
    <div>
      <h2
        class="font-nanum -tracking-[1.8px] font-semibold text-4xl leading-normal mb-5 tablet:text-center tablet:text-[20px] moblie:text-[16px]"
      >
        안녕하세요! 👋, <br />
        웹 개발자 강경원 입니다.
      </h2>
      <div
        class="font-nanum -tracking-[1.5px] text-lg tablet:text-center tablet:text-[16px] moblie:text-[14px]"
      >
        <p class="leading-8">
          문제를 해결하기 위해 노력하고 열정을 가진
          <strong>웹 개발자</strong> 입니다. <br />
          현재는 <strong>Node.js</strong>로 백엔드 개발을 진행하고 있습니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
