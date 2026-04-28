<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Inter',sans-serif; color:#334155; background:#ffffff; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
main { min-height:100vh; }
</style>
