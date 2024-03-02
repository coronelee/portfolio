<script setup>
import HeaderComponent from './Header.component.vue'
import { onMounted, ref } from 'vue'

const positionCursor = ref([])

const handleScroll = (event) => {
  positionCursor.value[0] = event.clientX
  positionCursor.value[1] = event.clientY
  document.getElementById('main').style.backgroundPositionX = `${positionCursor.value[0] / 100}px`
  document.getElementById('main').style.backgroundPositionY = `${positionCursor.value[1] / 50}px`
}
</script>

<template>
  <div class="overflow-hidden w-screen h-screen">
    <div
      class="bg-[url('/main.svg')] w-full h-full bg-no-repeat bg-cover bg-center bg-fixed scale-125"
      id="main"
      @mousemove="handleScroll"
    >
      <HeaderComponent />
    </div>
  </div>
</template>
