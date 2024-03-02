<template>
  <header
    class="w-8/12 h-24 flex items-center justify-between m-auto font-KodeBold text-white z-10 mt-24 absolute top-0 left-1/2 -translate-x-1/2"
  >
    <div class="flex items-center gap-4">
      <span>skills</span>
      <span>works</span>
    </div>
    <!-- <img
      src="/logo.png"
      class="cursor-pointer hover:animate-[logo_0.5s_ease-in-out_infinite] h-24"
    /> -->
    <span class="cursor-pointer hover:animate-[logo_0.5s_ease-in-out_infinite]">logo</span>
    <div
      class="rounded-full px-4 py-2 hover:text-black cursor-pointer transition duration-700 relative [&:hover>div]:animate-[bgWhite_0.5s_ease-in-out]"
    >
      <div class="w-0 h-0 rounded-full bg-white absolute top-0 left-0 z-10"></div>
      <span class="z-20 absolute w-full h-full">contacts</span>
    </div>
  </header>
</template>
