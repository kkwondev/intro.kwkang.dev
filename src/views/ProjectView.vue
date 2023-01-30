<template>
  <div class="h-full tablet:px-5 py-10">
    <div>
      <h2 class="text-2xl tracking-[-1.5px] mb-5 font-bold tablet:text-xl">
        개인 프로젝트
      </h2>
      <div class="grid grid-cols-2 gap-5 tablet:grid-cols-1">
        <ProjectItem
          v-for="project in individualProjects"
          :key="project.name"
          :name="project.name"
          :image="project.image"
          :subName="project.subName"
          :isComplete="project.isComplete"
          :dest="project.dest"
          :pageUrl="project.pageUrl"
          :githubUrl="project.githubUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectItem from "@/components/ProjectItem.vue";

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
    image: require("@/assets/project/uno-tech.jpeg"),
    dest: "클라이언트에 요구에 따라 디자인과 HTML, CSS 로 퍼블리싱 진행하였습니다.",
    isComplete: true,
    pageUrl: "http://uno-tech.kr/pages/v1/",
    githubUrl: "",
  },
  {
    name: "하나금속",
    subName: "(퍼블리싱)",
    image: require("@/assets/project/hana-metal.png"),
    dest: "디자이너에게 디자인을 PSD 형식으로 HTML, CSS 로 퍼블리싱 진행하였습니다.",
    isComplete: true,
    pageUrl: "http://hanametal.co.kr/v3/pages/kor/index.php",
    githubUrl: "",
  },
];
</script>
