<template>
  <div class="h-full tablet:px-5 py-10">
    <div>
      <h2 class="text-2xl tracking-[-1.5px] mb-5 font-bold tablet:text-xl">
        개인 프로젝트
      </h2>
      <div class="grid grid-cols-2 gap-5 tablet:grid-cols-1">
        <div
          class="border-[1px] rounded-md border-gray-100 p-5 min-h-[200px]"
          v-for="project in individualProjects"
          :key="project.name"
        >
          <div
            class="h-32 flex items-center justify-center"
            v-if="project.image"
          >
            <img
              :src="project.image"
              alt="logo"
              class="max-w-[40%] block min-w-[30%]"
            />
          </div>
          <div class="flex flex-col mb-5">
            <h3
              class="mb-3 text-2xl font-bold leading-8 tracking-[-1.5px] tablet:text-xl moblie:text-lg"
            >
              {{ project.name }}
              <span
                class="text-gray-500 text-lg font-normal mr-1 tablet:text-sm moblie:text-xs"
                >{{ project.subName }}</span
              >
              <span
                class="px-2 text-white text-xs font-normal moblie:text-[10px]"
                :class="!project.isComplete ? 'bg-red-500' : 'bg-green-300'"
                >{{ project.isComplete ? "완료" : "진행중" }}</span
              >
            </h3>
            <p class="tracking-[-1.1px] text-gray-500 tablet:text-sm">
              {{ project.dest }}
            </p>
          </div>
          <div class="text-3xl cursor-pointer tablet:text-2xl flex gap-2">
            <Icon
              v-if="project.pageUrl"
              icon="mdi-light:home"
              @Click="onLinkRedirect(project.pageUrl)"
            />
            <Icon
              v-if="project.githubUrl"
              icon="mdi:github"
              @Click="onLinkRedirect(project.githubUrl)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const onLinkRedirect = (link: string) => {
  window.open(link, "_blank");
};

const individualProjects = [
  {
    name: "개인 블로그",
    subName: "(풀 스텍 개발)",
    image: "",
    dest: "Remix, Tailwind css 프론트엔드 개발 및 Express, Typescript로 백엔드 개발 진행중입니다.",
    isComplete: false,
    pageUrl: "https://blog.kwkang.dev",
    githubUrl: "https://github.com/kkwondev/blog.kwkang.dev",
  },
  {
    name: "<kwkang.dev/>",
    subName: "(프론트엔드 개발)",
    image: "",
    dest: "Vue3, Tailwind css로 개발 진행중 입니다. (소개페이지)",
    isComplete: false,
    pageUrl: "https://kwkang.dev",
    githubUrl: "https://github.com/kkwondev/intro.kwkang.dev",
  },
  {
    name: "루나톡 (쇼핑몰) SSR",
    subName: "(프론트엔드 개발)",
    image:
      "https://admin.lunatalk.co.kr/static/media/logo.e0e49014f4ed6f070031.jpg",
    dest: "Next.js tailwind css로 개발 진행 중입니다. (CRA -> SSR) 변경",
    isComplete: false,
    pageUrl: "https://dev.lunatalk.co.kr/",
    githubUrl: "https://github.com/seojindev/lunatalk.web",
  },
  {
    name: "루나톡 (쇼핑몰)",
    subName: "(프론트엔드 개발)",
    image:
      "https://admin.lunatalk.co.kr/static/media/logo.e0e49014f4ed6f070031.jpg",
    dest: "React(CRA), Bootstrap, Typescript, Redux로 프론트엔드 개발을 진행하였습니다.",
    isComplete: true,
    pageUrl: "https://www.lunatalk.co.kr/",
    githubUrl: "https://github.com/seojindev/lunatalk.frontend",
  },
  {
    name: "우노테크",
    subName: "(퍼블리싱)",
    image: "http://uno-tech.kr/assets/img/common/logo.jpg",
    dest: "클라이언트에 요구에 따라 디자인과 HTML, CSS 로 퍼블리싱 진행하였습니다.",
    isComplete: true,
    pageUrl: "http://uno-tech.kr/pages/v1/",
    githubUrl: "",
  },
  {
    name: "하나금속",
    subName: "(퍼블리싱)",
    image: "http://hanametal.co.kr/v3/assets/img/common/main_logo.png",
    dest: "디자이너에게 디자인을 PSD 형식으로 HTML, CSS 로 퍼블리싱 진행하였습니다.",
    isComplete: true,
    pageUrl: "http://hanametal.co.kr/v3/pages/kor/index.php",
    githubUrl: "",
  },
];
</script>
