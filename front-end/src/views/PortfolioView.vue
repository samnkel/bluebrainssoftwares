<template>
  <div class="page">
    <section class="page-header">
      <div class="container">
        <h1>Our Portfolio</h1>
        <p>A showcase of projects that demonstrate our commitment to quality.</p>
      </div>
    </section>
    <section class="content">
      <div class="container">
        <div class="portfolio-grid">
          <div class="project" v-for="p in projects" :key="p.title">
            <div class="project-img" :style="{ background: p.color }">
              <span>{{ p.icon }}</span>
            </div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const projects = [
  { title: "TechStart Platform", desc: "Modern SaaS landing page and dashboard.", color: "linear-gradient(135deg,#1e88e5,#0d1b2a)", icon: "TS" },
  { title: "GrowthLabs CRM", desc: "Custom CRM with automated workflows.", color: "linear-gradient(135deg,#22c55e,#16a34a)", icon: "GL" },
  { title: "Bloom Boutique", desc: "Beautiful e-commerce store.", color: "linear-gradient(135deg,#f472b6,#db2777)", icon: "BB" },
  { title: "HealthConnect", desc: "Telemedicine platform.", color: "linear-gradient(135deg,#0d9488,#134e4a)", icon: "HC" },
  { title: "FinTrack", desc: "Financial analytics dashboard.", color: "linear-gradient(135deg,#6366f1,#4f46e5)", icon: "FT" },
  { title: "FoodieHub", desc: "Food delivery platform.", color: "linear-gradient(135deg,#f59e0b,#d97706)", icon: "FH" }
];
</script>

<style scoped>
.page-header {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #0d1b2a, #1e3a5f);
  text-align: center;
  color: white;
}
.page-header h1 {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin: 0 0 1rem;
}
.page-header p {
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}
.content {
  padding: 4rem 0;
  background: white;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.project {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.project:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}
.project-img {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-img span {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  font-weight: 700;
}
.project h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 1rem 1.5rem 0.5rem;
}
.project p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 1.5rem 1.5rem;
}
@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>

