<template>
  <div class="service-card" :class="{ featured: featured }">
    <div class="card-icon">
      <svg v-if="icon === 'web'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.959 11.959 0 013.38 14.215"/></svg>
      <svg v-else-if="icon === 'software'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>
      <svg v-else-if="icon === 'business'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>
      <svg v-else-if="icon === 'maintenance'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></svg>
      <svg v-else-if="icon === 'mobile'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <ul v-if="features" class="feature-list">
      <li v-for="feature in features" :key="feature">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
        {{ feature }}
      </li>
    </ul>
    <RouterLink v-if="link" :to="link" class="card-link">
      Learn more
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
    </RouterLink>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: 'default' },
  title: String,
  description: String,
  features: Array,
  link: String,
  featured: { type: Boolean, default: false }
})
</script>

<style scoped>
.service-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 100%;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #1e88e5;
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card.featured {
  background: #0d1b2a;
  color: white;
  border-color: transparent;
}

.service-card.featured::before {
  background: #1e88e5;
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(30, 136, 229, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e88e5;
  margin-bottom: 1.5rem;
}

.service-card.featured .card-icon {
  background: rgba(30, 136, 229, 0.2);
}

.card-icon svg {
  width: 28px;
  height: 28px;
}

.service-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.8rem;
  color: #0d1b2a;
}

.service-card.featured h3 {
  color: white;
}

.service-card p {
  color: #64748b;
  line-height: 1.7;
  margin: 0 0 1.5rem;
}

.service-card.featured p {
  color: #94a3b8;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  color: #475569;
  font-size: 0.95rem;
}

.service-card.featured .feature-list li {
  color: #cbd5e1;
}

.feature-list li svg {
  width: 18px;
  height: 18px;
  color: #1e88e5;
  flex-shrink: 0;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #1e88e5;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: gap 0.3s ease;
}

.card-link:hover {
  gap: 0.7rem;
}

.card-link svg {
  width: 18px;
  height: 18px;
}
</style>

