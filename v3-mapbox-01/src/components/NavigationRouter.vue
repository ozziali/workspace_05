<template>
    <a href="#/">Home</a> |
    <a href="#/drivers">Drivers</a> |
    <a href="#/tasks">Tasks</a> |
    <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
</template>

<script setup>
import { ref, computed } from 'vue'
import Home from './views/Home.vue'
import Drivers from './views/Drivers.vue'
import Tasks from './views/Tasks.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

const routes = {
  '/': Home,
  '/drivers': Drivers,
  '/tasks': Tasks,
  '/about': About,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<style scoped>

</style>