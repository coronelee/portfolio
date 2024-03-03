<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import MainWindowComponent from './components/MainWindowComponent.vue'
import AboutMePage from './components/AboutMeComponent.vue'
import WorksComponent from './components/WorksComponent.vue'
import ContactsComponent from './components/ContactsComponent.vue'
</script>

<template>
  <div class="relative flex flex-col">
    <HeaderComponent />
    <MainWindowComponent />
    <AboutMePage />
    <WorksComponent />
    <ContactsComponent />
  </div>
</template>
