<template>
  <div class="page">
    <section class="page-header">
      <div class="container">
        <h1>About BlueBrains</h1>
        <p>We are a team of passionate developers and designers dedicated to digital excellence.</p>
      </div>
    </section>
    <section class="content">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Our Story</h2>
            <p>BlueBrains Software was founded to help businesses thrive in the digital age. We combine technical expertise with creative design to deliver exceptional results.</p>
            <p>We believe great software is built at the intersection of technical excellence and human-centered design.</p>
          </div>
          <div class="stats">
            <div class="stat">
              <strong>4+</strong>
              <span>Projects</span>
            </div>
            <div class="stat">
              <strong>2+</strong>
              <span>Clients</span>
            </div>
            <div class="stat">
              <strong>1</strong>
              <span>Team Members</span>
            </div>
            <div class="stat">
              <strong>1+</strong>
              <span>Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
  padding: 5rem 0;
  background: white;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.about-text h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.8rem;
  color: #0d1b2a;
  margin: 0 0 1rem;
}
.about-text p {
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.stat {
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}
.stat strong {
  display: block;
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e88e5;
}
.stat span {
  color: #64748b;
  font-size: 0.9rem;
}
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>

