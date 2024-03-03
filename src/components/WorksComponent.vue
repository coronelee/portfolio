<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
// const clientH = ref(0)
const works = ref({})
onMounted(() => {
  //   clientH.value = window.innerHeight
  //   document.getElementById('works').style.top = `${clientH.value * 2}px`
  axios.get('https://86e772c40d27ca73.mokky.dev/works').then((res) => (works.value = res))
  const observerItem = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById('works').style.opacity = '1' 
        }
      })
    },
    { threshold: 0.5 }
  )
observerItem.observe(document.getElementById('works'))
})

const openHref = (href) => {
  window.location.href = href
}
</script>
<template>
  <div
    class="w-screen h-auto py-12 bg-[#060918] flex flex-col justify-center items-center gap-12 opacity-0 transition-all duration-1000"
    id="works"
  >
    <div
      class="px-4 relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden"
    >
      <span>работы</span>
      <div
        class="w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] block absolute top-0 left-0"
      ></div>
    </div>
    <div class="w-full h-auto flex justify-center gap-8 px-8 flex-wrap">
      <div
        v-for="el in works.data"
        v-bind:key="el.id"
        class="w-[400px] h-[600px] rounded-xl bg-cover bg-no-repeat bg-center [&:hover>div]:opacity-100 [&:hover>span>img]:scale-110 flex justify-center items-center cursor-pointer"
        @click="openHref(el.href)"
        :style="{ 'background-image': el.img }"
      >
        <div
          class="z-20 opacity-0 transition-all duration-700 gap-8 backdrop-blur-lg w-full h-full flex flex-col text-center px-4 justify-center items-center text-white rounded-3xl"
        >
          <span class="text-3xl font-bold"> {{ el.name }}</span>
          <span class="text-xl">{{ el.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
