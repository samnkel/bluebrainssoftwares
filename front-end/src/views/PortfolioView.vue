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
 {  "title": "Website",
    "desc": "a website for a non-profit organization focused on environmental conservation, featuring a clean design and interactive elements to engage visitors and encourage fundraising.",
    "icon": "BGSA",
    "color": "linear-gradient(135deg, #67abf5, #76b1ff)"
  },
  {
    "title": "Portfolio",
    "desc": "a professional portfolio website for a creative designer, showcasing their work and skills in a visually appealing manner.",
    "icon": "SM",
    "color": "linear-gradient(135deg, green, #42a5f5)"
  },

]
</script>

<style scoped>
.page-header {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #fafafa, hsl(208, 73%, 57%), #cadfff);
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

