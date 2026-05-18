<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="nav-container">
      <RouterLink to="/" class="nav-logo" @click="menuOpen = false">
        <div class="logo-stack">
          <img src="../assets/383d585a-515d-48e8-927e-31779cd77528 (1).png" alt="BlueBrains Logo" class="logo-img" />
          <div class="logo-text">
            <h2>
              <span class="logo-blue">Blue</span><span class="logo-dark">Brains</span>
            </h2>
            <span class="logo-sub">SOFTWARES</span>
          </div>
        </div>
      </RouterLink>

      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ active: menuOpen }">
        <li><RouterLink to="/" @click="menuOpen = false">Home</RouterLink></li>
        <li><RouterLink to="/services" @click="menuOpen = false">Services</RouterLink></li>
        <li><RouterLink to="/about" @click="menuOpen = false">About</RouterLink></li>
        <li><RouterLink to="/portfolio" @click="menuOpen = false">Portfolio</RouterLink></li>
        <li><RouterLink to="/contact" class="nav-cta" @click="menuOpen = false">Get Started</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1.2rem 0;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  padding: 0.8rem 0;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav-logo {
  text-decoration: none;
}

.logo-stack {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-text h2 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.logo-sub {
  font-size: 0.65rem;
  letter-spacing: 4px;
  color: #6c7a89;
  margin-top: 2px;
}

.logo-img {
  height: 34px;
  margin-bottom: 6px;
}

.logo-stack h2 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.logo-blue {
  color: #1e88e5;
}

.logo-dark {
  color: black;
}

.logo-sub {
  margin-top: 6px;
  font-size: 0.68rem;
  letter-spacing: 5px;
  color: #6c7a89;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-sub::before,
.logo-sub::after {
  content: '';
  width: 50px;
  height: 1.2px;
  background: #1e88e5;
  opacity: 0.7;
}

.logo-img {
  height: 52px;
  width: auto;
  display: block;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: gray;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #1e88e5;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #1e88e5;
}

.nav-cta {
  background: #1e88e5 !important;
  color: white !important;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}

.nav-cta::after {
  display: none !important;
}

.nav-cta:hover {
  background: #1565c0 !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 136, 229, 0.35);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 2.5px;
  background: #0d1b2a;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-open .hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-open .hamburger span:nth-child(2) {
  opacity: 0;
}

.menu-open .hamburger span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: min(92vw, 320px);
    max-width: 320px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(14px);
    border-left: 1px solid rgba(15, 23, 42, 0.08);
    flex-direction: column;
    padding: 6rem 1.75rem 2rem;
    gap: 1.4rem;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a {
    font-size: 1.1rem;
  }

  .nav-cta {
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
