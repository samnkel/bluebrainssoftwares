<template>
  <div class="section-title" :class="{ centered: centered, light: light }">
    <span v-if="badge" class="badge">{{ badge }}</span>
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  badge: String,
  centered: { type: Boolean, default: true },
  light: { type: Boolean, default: false }
})
</script>

<style scoped>
.section-title {
  margin-bottom: 3rem;
}

.section-title.centered {
  text-align: center;
}

.badge {
  display: inline-block;
  background: rgba(30, 136, 229, 0.1);
  color: #1e88e5;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.section-title h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #0d1b2a;
  margin: 0 0 1rem;
  line-height: 1.2;
}

.section-title.light h2 {
  color: white;
}

.section-title p {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.section-title.light p {
  color: #94a3b8;
}

@media (max-width: 768px) {
  .section-title h2 {
    font-size: 1.8rem;
  }
}
</style>

