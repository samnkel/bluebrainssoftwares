<template>
  <div class="stat-item">
    <div class="stat-number">
      <span ref="countRef">0</span>{{ suffix }}
    </div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  end: { type: Number, required: true },
  suffix: { type: String, default: '' },
  label: String,
  duration: { type: Number, default: 2000 }
})

const countRef = ref(null)

onMounted(() => {
  const el = countRef.value
  if (!el) return

  let startTime = null
  const startValue = 0

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / props.duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(startValue + (props.end - startValue) * easeOut)
    el.textContent = current

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )

  observer.observe(el.parentElement)
})
</script>

<style scoped>
.stat-item {
  text-align: center;
}

.stat-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: white;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-number span {
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: #94a3b8;
  font-size: 0.95rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .stat-number {
    font-size: 2.2rem;
  }
}
</style>

