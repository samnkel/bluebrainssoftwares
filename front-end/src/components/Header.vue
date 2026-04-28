<template>
  <header class="header">
    <div class="logo-container">
      <div class="logo-row">
        <img src="../assets/383d585a-515d-48e8-927e-31779cd77528 (1).png" alt="BlueBrains Logo" class="logo" />
        <h1 class="brand">
          <span class="blue">BLUE</span><span class="dark">BRAINS</span>
        </h1>
      </div>

      <!-- Subtitle -->
      <p class="subtitle">SOFTWARES</p>
    </div>
  </header>
</template>

<script setup>
// no logic needed for now
</script>

<style scoped>
.header {
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

/* Container */
.logo-container {
  text-align: center;
}

/* Logo row */
.logo-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

/* Logo */
.logo {
  width: 60px;
  height: auto;
}

/* Brand Name */
.brand {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 4px;
  margin: 0;
}

/* Blue + Dark split */
.blue {
  color: #1e88e5;
}

.dark {
  color: #0d1b2a;
}

/* Subtitle */
.subtitle {
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: 6px;
  color: #6c757d;
  position: relative;
}

/* Decorative lines */
.subtitle::before,
.subtitle::after {
  content: "";
  display: inline-block;
  width: 50px;
  height: 2px;
  background: #1e88e5;
  margin: 0 10px;
  vertical-align: middle;
}
</style>
