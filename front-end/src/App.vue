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
:root {
  color-scheme: light;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  scroll-behavior: smooth;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  min-height: 100%;
}

body {
  min-height: 100vh;
  color: #334155;
  background: #f8fafc;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

img, picture, svg {
  max-width: 100%;
  height: auto;
  display: block;
}

button, input, textarea, select, a {
  font: inherit;
}

main {
  min-height: calc(100vh - 88px);
  padding-top: 88px;
}

section {
  padding: clamp(3rem, 5vw, 6rem) 0;
}

.container {
  width: min(1280px, 100%);
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 2rem);
}

@media (max-width: 768px) {
  main {
    min-height: auto;
    padding-top: 100px;
  }
}
</style>
