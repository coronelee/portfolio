<script setup>
import { onMounted, ref } from 'vue'
// const clientH = ref(0)
const aboutMePage = ref(0)
onMounted(() => {
  //   clientH.value = window.innerHeight
  //   document.getElementById('aboutme').style.top = `${clientH.value}px`

  const observerTarget = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById('header').style.border = '1px black solid'
        } else {
          document.getElementById('header').style.border = 'none'
        }
      })
    },
    { threshold: 1.0 }
  )
  observerTarget.observe(document.getElementById('trigger'))

  setTimeout(() => {}, 10000)
})
const editPage = (btn) => {
  if (btn == 0) {
    aboutMePage.value = 0
    document.getElementById('btn0').style.display = 'block'
    document.getElementById('btn1').style.display = 'none'
  } else if (btn == 1) {
    aboutMePage.value = 1
    document.getElementById('btn0').style.display = 'none'
    document.getElementById('btn1').style.display = 'block'
  }
}
</script>
<template>
  <div
    class="w-screen h-screen bg-white [&>div]:h-full flex font-KellySlab border-b border-[#00000066]"
    id="aboutme"
  >
    <div
      class="h-full bg-[#060918] w-3/5 bg-[url('../glob/me.jpg')] bg-right bg-cover bg-no-repeat max-[1200px]:hidden"
    ></div>
    <div
      class="relative bg-[#060918] w-3/5 flex items-center justify-start px-12 max-[1200px]:w-full"
    >
      <div class="text-white flex flex-col gap-12">
        <div class="flex max-[1200px]:justify-center gap-20 text-sm max-[400px]:gap-4">
          <div
            class="px-4 cursor-pointer relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden"
            @click="editPage(0)"
          >
            <span>обо мне</span>
            <div
              class="w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] block absolute top-0 left-0"
              id="btn0"
            ></div>
          </div>
          <div
            class="px-4 cursor-pointer relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden"
            @click="editPage(1)"
          >
            <span>мой стек</span>
            <div
              class="w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] hidden absolute top-0 left-0"
              id="btn1"
            ></div>
          </div>
        </div>
        <div v-if="aboutMePage == 0" class="max-[1200px]:text-center">
          <span class="text-xl font-Ubuntu">
            <b>Привет!</b> Меня зовут <span class="text-[#6919ff]">Антон</span>, Я
            Frontend-разработчик, увлеченный созданием интерактивных, доступных и адаптивных
            веб-сайтов. Ознакомьтесь с разделом мои проекты, где представлены некоторые из созданных
            мной веб-сайтов. В настоящее время я открыт для вакансий, где я могу внести свой вклад в
            ваш бизнес. Не стесняйтесь обращаться ко мне, если вы сочтете мои навыки полезными
          </span>
        </div>
        <div
          v-if="aboutMePage == 1"
          class="flex flex-col gap-2 font-Ubuntu [&>div>span]:px-4 [&>div>span]:py-2 [&>div>span]:bg-[#081c30] [&>div>span]:rounded-full [&>div>span:hover]:brightness-75"
        >
          <b>Активно использую:</b>
          <div class="flex flex-wrap gap-4">
            <span>css</span>
            <span>scss</span>
            <span>javascript</span>
            <span>reactss</span>
            <span>git</span>
            <span>figma</span>
            <span>gimp</span>
            <span>photoshop</span>
            <span>vscode</span>
            <span>БЭМ</span>
            <span>vite</span>
            <span>adaptive</span>
            <span>cross-browser</span>
            <span>vue</span>
            <span>tailwindcss</span>
          </div>
          <b>Знаком с:</b>
          <div class="flex flex-wrap gap-4">
            <span>typescript</span>
            <span>mysql</span>
            <span>nextjs</span>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full text-white" id="trigger"></div>
    </div>
  </div>
</template>
