<script setup>
import { ref } from 'vue'

const positionCursor = ref([])

const handleScroll = (event) => {
  positionCursor.value[0] = event.clientX
  positionCursor.value[1] = event.clientY
  document.getElementById('main').style.backgroundPositionX = `${positionCursor.value[0] / 100}px`
  document.getElementById('main').style.backgroundPositionY = `${positionCursor.value[1] / 50}px`
}
</script>

<template>
  <div class="overflow-hidden w-full h-screen relative h-full">
    <div
      class="bg-[url('../glob/main.svg')] w-full h-full bg-no-repeat bg-cover bg-top bg-fixed scale-110 font-KellySlab relative flex items-center justify-center flex-col gap-24 max-[425px]:gap-8"
      id="main"
      @mousemove="handleScroll"
    >
      <div
        class="text-6xl text-center font-KellySlab text-white uppercase w-1/2 max-[640px]:w-3/4 max-[425px]:text-4xl"
      >
        web developer from the future
      </div>
      <div
        class="flex gap-20 [&>button]:rounded-full [&>button]:cursor-pointer [&>button]:font-KellySlab max-[500px]:gap-8 max-[425px]:flex-col"
      >
        <button
          class="bg-white px-8 relative w-40 h-10 [&:hover>div]:h-full [&:hover>div]:w-full border border-white [&:hover>span]:text-white flex items-center justify-center"
        >
          <span
            class="z-20 text-[#6919ff] absolute w-full h-full flex items-center justify-center transition-all duration-300"
            ><a href="#aboutme">Узнать про меня</a></span
          >
          <div
            class="w-0 h-0 rounded-full bg-[#6919ff] absolute z-10 transition-all duration-300"
          ></div>
        </button>

        <button
          class="relative px-8 w-40 h-10 [&:hover>div]:h-full [&:hover>div]:w-full border border-white [&:hover>span]:text-[#6919ff] flex items-center justify-center"
        >
          <span
            class="z-20 text-white absolute w-full h-full flex items-center justify-center transition-all duration-300"
            ><a href="#works">Посмотреть работы</a></span
          >
          <div
            class="w-0 h-0 rounded-full bg-white absolute z-10 transition-all duration-300"
          ></div>
        </button>
      </div>
    </div>
  </div>
</template>
