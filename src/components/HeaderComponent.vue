<script setup>
import { onMounted, ref } from 'vue'

const positionScroll = ref(0)
const menu = ref(false)
onMounted(() => {
  addEventListener('scroll', () => {
    positionScroll.value = window.scrollY
    if (positionScroll.value > 1) {
      document.getElementById('header').style.backgroundColor = '#00000066'
      document.getElementById('header').style.backdropFilter = 'blur(16px)'
    } else if (positionScroll.value < 1) {
      document.getElementById('header').style.backgroundColor = 'transparent'
      document.getElementById('header').style.backdropFilter = 'none'
    }
  })
})
const openCloseMenu = () => {
  menu.value = !menu.value
}
</script>

<template>
  <header
    class="w-8/12 max-[530px]:w-16 max-[530px]:top-2 max-[530px]:left-10 py-2 px-4 rounded-full transition-all duration-500 flex items-center justify-between m-auto font-KellySlab fixed text-white z-10 top-[5%] left-1/2 -translate-x-1/2"
    id="header"
  >
    <div
      class="flex items-center gap-4 [&>span:hover]:border-b [&>span:hover]:border-white [&>span]:cursor-pointer max-[530px]:hidden"
    >
      <span><a href="#aboutme">Обо мне</a></span>
      <span><a href="#works">Работы</a></span>
    </div>

    <span
      class="cursor-pointer hover:animate-[logo_0.5s_ease-in-out_infinite] font-KodeRegular max-[740px]:hidden"
      @click="() => window.scrollTo(0, 0)"
    >
      <b>coronel</b>
      studios
    </span>
    <div
      class="rounded-full flex items-center justify-center h-10 px-4 py-2 hover:text-black cursor-pointer relative [&:hover>div]:h-full [&:hover>div]:w-full border border-white max-[530px]:hidden"
    >
      <span class="z-20 px-4"><a href="#contacts">Связь со мной</a></span>

      <div class="w-0 h-0 rounded-full bg-white absolute z-10 transition-all duration-300"></div>
    </div>
    <div
      class="max-[530px]:block min-[530px]:hidden w-screen cursor-pointer"
      @click="openCloseMenu"
    >
      <img src="/hamburger.svg" alt="" class="w-12 h-12" />
    </div>
  </header>
  <div
    class="absolute w-screen h-screen bg-[#00000033] backdrop-blur-xl z-40 animate-[openMenu_1s_ease] top-0 left-0 float-left"
    v-if="menu"
    id="menu"
  >
    <div
      class="max-[530px]:block min-[530px]:hidden w-screen cursor-pointer z-50 h-full"
      @click="openCloseMenu"
    >
      <div class="py-2 px-4 rounded-full transition-all duration-500 relative">
        <img src="/close.svg" alt="" class="w-10 h-10 top-4 left-4 absolute" />
      </div>
      <div
        class="flex items-center justify-center relative w-full h-full flex-col text-white font-Ubuntu gap-6 text-xl animate-[openMenu_1s_ease]"
      >
        <span><a href="#aboutme">Обо мне</a></span> <span><a href="#works">Работы</a></span
        ><span class="[&>a>img]:w-12 flex justify-end gap-4">
          <a href="https://t.me/yourantosha"><img src="/social/tg.svg" alt="" /></a>
          <a href="https://vk.com/6old6"> <img src="/social/vk.svg" alt="" /></a>
          <a href="mailto:tacontactta@gmail.com"><img src="/social/gmail.svg" alt="" /></a>
        </span>
      </div>
    </div>
  </div>
</template>
