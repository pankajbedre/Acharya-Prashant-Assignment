<script setup>
import { RouterView } from 'vue-router'
import NavbarNavigation from './components/navbars/NavbarNavigation.vue'
import NavbarBanner from './components/navbars/NavbarBanner.vue';
import NavbarSearch from './components/navbars/NavbarSearch.vue';
</script>

<template>
  <NavbarNavigation></NavbarNavigation>
  <NavbarBanner></NavbarBanner>
  <NavbarSearch></NavbarSearch>

  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
