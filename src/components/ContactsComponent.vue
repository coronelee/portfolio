<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
// const clientH = ref(0)
onMounted(() => {
  //   clientH.value = window.innerHeight
  //   document.getElementById('contacts').style.top = `${clientH.value * 3}px`
})
const hireMe = () => {
  const tgInput = document.getElementById('tg')
  const nameInput = document.getElementById('name')
  if (tgInput.value == 0) {
    tgInput.style.border = '1px red solid'
  } else {
    axios.post('https://86e772c40d27ca73.mokky.dev/social', {
      name: nameInput.value,
      tg: tgInput.value
    })
    tgInput.style.border = 'none'
    tgInput.style.borderBottom = '1px white solid'
  }
}
</script>
<template>
  <div
    class="w-screen h-auto bg-[#060918] flex flex-col justify-center items-center gap-12"
    id="contacts"
  >
    <div
      class="px-4 relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden"
    >
      <span>Связь со мной</span>
      <div
        class="w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] block absolute top-0 left-0"
      ></div>
    </div>
    <div class="w-full h-[550px] z-10 flex justify-center gap-8 px-8 text-white">
      <div class="flex gap-20 max-[750px]:flex-col max-[750px]:gap-4">
        <div
          class="flex flex-col w-2/5 text-right gap-2 max-[750px]:w-full max-[750px]:text-center"
        >
          <span class="text-4xl font-bold">У вас остались вопросы? </span>
          <span class="text-[#96a1c0]"
            >Вы можете оставить свой телеграм и я свяжусь с вами в ближайшее время,</span
          >
          <span>или свяжитесь со мной сами:</span>
          <span class="[&>a>img]:w-10 flex justify-end gap-4 max-[750px]:justify-center">
            <a href="https://t.me/yourantosha"><img src="/social/tg.svg" alt="" /></a>
            <a href="https://vk.com/6old6"> <img src="/social/vk.svg" alt="" /></a>
            <a href="mailto:tacontactta@gmail.com"><img src="/social/gmail.svg" alt="" /></a>
          </span>
        </div>
        <div
          class="flex max-[750px]:w-full gap-8 flex-col w-2/5 [&>input]:px-8 [&>input]:py-2 [&>input]:bg-transparent [&>input]:text-white [&>input]:border-b [&>input]:border-white [&>input]:outline-none"
        >
          <input type="text" placeholder="Как к вам обращаться" id="name" />
          <input type="text" placeholder="@telegram" id="tg" />
          <button
            @click="hireMe"
            class="px-8 py-2 rounded hover:bg-red-400 transition duration-500"
          >
            Написать мне
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
