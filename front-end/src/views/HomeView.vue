<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="pulse"></span>Now accepting new projects
        </div>
        <h1 class="hero-title">Turn Your Ideas Into <span class="gradient-text">Digital Reality</span></h1>
        <p class="hero-subtitle">We build powerful websites, software systems, and online businesses that drive growth and deliver results.</p>
        <div class="hero-cta">
          <RouterLink to="/contact" class="btn-primary">Start Your Project</RouterLink>
          <RouterLink to="/portfolio" class="btn-secondary">View Our Work</RouterLink>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <strong>4+</strong>
            <span>Projects Delivered</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <strong>98%</strong>
            <span>Client Satisfaction</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <strong>1+</strong>
            <span>Years Experience</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <SectionTitle badge="What We Do" title="Services Built for Your Success" subtitle="End-to-end digital solutions tailored to your business needs." />
        <div class="services-grid">
          <ServiceCard icon="web" title="Web Development" description="Custom, responsive websites built with modern technologies that convert visitors into customers." :features="['Responsive Design','SEO Optimized','Fast Performance','CMS Integration']" link="/services" />
          <ServiceCard icon="software" title="Software Systems" description="Tailored software solutions that automate processes and scale with your business." :features="['Custom CRM/ERP','Database Design','API Development','Cloud Solutions']" link="/services" featured />
          <ServiceCard icon="business" title="Online Business" description="E-commerce and digital marketing solutions that grow your revenue online." :features="['E-commerce Stores','Payment Integration','Marketing Funnels','Analytics Setup']" link="/services" />
          <ServiceCard icon="maintenance" title="Maintenance & Support" description="Ongoing support for your digital assets so you can focus on your business." :features="['24/7 Monitoring','Security Updates','Performance Tuning','Content Updates']" link="/services" />
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <SectionTitle badge="Our Process" title="How We Work" subtitle="A proven methodology that delivers exceptional results every time." />
        <div class="process-grid">
          <div class="process-card">
            <div class="process-number">01</div>
            <div class="process-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>Discovery</h3>
            <p>We start by understanding your business, goals, and target audience through in-depth consultations and research.</p>
          </div>
          <div class="process-card">
            <div class="process-number">02</div>
            <div class="process-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </div>
            <h3>Strategy & Design</h3>
            <p>We craft a tailored strategy and create stunning designs that align with your brand and user expectations.</p>
          </div>
          <div class="process-card">
            <div class="process-number">03</div>
            <div class="process-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3>Development</h3>
            <p>Our engineers build robust, scalable solutions using cutting-edge technologies and best practices.</p>
          </div>
          <div class="process-card">
            <div class="process-number">04</div>
            <div class="process-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3>Launch & Support</h3>
            <p>We deploy your solution and provide ongoing support to ensure continuous success and growth.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <StatCounter :end="4" suffix="+" label="Projects Completed" />
          <StatCounter :end="2" suffix="+" label="Happy Clients" />
          <StatCounter :end="1" suffix="+" label="Team Members" />
          <StatCounter :end="99" suffix="%" label="Uptime Guaranteed" />
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="projects-section">
      <div class="container">
        <SectionTitle badge="Portfolio" title="Featured Projects" subtitle="See how we have helped businesses transform their digital presence." />
        <div class="projects-grid">
          <div class="project-card" v-for="p in featuredProjects" :key="p.title">
            <div class="project-image" :style="{ background: p.color }">
              <span class="project-icon">{{ p.icon }}</span>
            </div>
            <div class="project-info">
              <span class="project-tag">{{ p.tag }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
        <div class="projects-cta">
          <RouterLink to="/portfolio" class="btn-secondary">View All Projects</RouterLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <SectionTitle badge="Testimonials" title="What Our Clients Say" subtitle="Do not just take our word for it, hear from the people we have worked with." />
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="t in testimonials" :key="t.name">
            <div class="testimonial-stars">
              <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p class="testimonial-text">"{{ t.quote }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar" :style="{ background: t.avatarColor }">{{ t.initials }}</div>
              <div class="author-info">
                <strong>{{ t.name }}</strong>
                <span>{{ t.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Let us discuss your project and create something extraordinary together. Get a free consultation today.</p>
          <RouterLink to="/contact" class="btn-primary btn-large">Get a Free Consultation</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import SectionTitle from "../components/SectionTitle.vue"
import ServiceCard from "../components/ServiceCard.vue"
import StatCounter from "../components/StatCounter.vue"

const featuredProjects = ref([
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

])


const testimonials = ref([
  
  { quote: "The team delivered beyond our expectations. Their attention to detail and technical expertise made our complex project feel effortless.", name: "Samnkelisiwe Mpiyonke", role: "Founde blebrains Softwares", initials: "SM", avatarColor: "linear-gradient(135deg,#22c55e,#16a34a)" },
 
])
</script>

<style scoped>
/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  padding: 6rem 2rem 4rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float 20s infinite ease-in-out;
}

.orb-1 { width: 500px; height: 500px; background: #1e88e5; top: -10%; right: -10%; }
.orb-2 { width: 400px; height: 400px; background: #0d1b2a; bottom: -10%; left: -10%; animation-delay: -7s; }
.orb-3 { width: 300px; height: 300px; background: #42a5f5; top: 40%; left: 30%; animation-delay: -14s; }

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(30, 136, 229, 0.1);
  color: #1e88e5;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  margin-bottom: 2rem;
}

.pulse {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.hero-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: #0d1b2a;
  margin: 0 0 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #1e88e5, #0d1b2a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #1e88e5;
  color: white;
  box-shadow: 0 10px 30px rgba(30, 136, 229, 0.3);
}

.btn-primary:hover {
  background: #1565c0;
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(30, 136, 229, 0.4);
}

.btn-secondary {
  background: white;
  color: #0d1b2a;
  border: 2px solid #e2e8f0;
}

.btn-secondary:hover {
  border-color: #1e88e5;
  color: #1e88e5;
  transform: translateY(-3px);
}

.btn-large {
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.hero-stat {
  text-align: center;
}

.hero-stat strong {
  display: block;
  font-family: "Space Grotesk", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #0d1b2a;
}

.hero-stat span {
  font-size: 0.85rem;
  color: #64748b;
}

.hero-stat-divider {
  width: 1px;
  height: 40px;
  background: #cbd5e1;
}

/* Services */
.services-section {
  padding: 6rem 0;
  background: white;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Process */
.process-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.process-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  border: 1px solid #e2e8f0;
  position: relative;
  text-align: center;
  transition: all 0.3s ease;
}

.process-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.process-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #e2e8f0;
}

.process-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(30, 136, 229, 0.1);
  color: #1e88e5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.process-icon svg {
  width: 28px;
  height: 28px;
}

.process-card h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 0 0 0.8rem;
}

.process-card p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0;
}

/* Stats */
.stats-section {
  padding: 5rem 0;
  background: #0d1b2a;
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #1e88e5, transparent);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

/* Projects */
.projects-section {
  padding: 6rem 0;
  background: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.project-image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
}

.project-info {
  padding: 1.5rem;
}

.project-tag {
  display: inline-block;
  background: rgba(30, 136, 229, 0.1);
  color: #1e88e5;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  margin-bottom: 0.8rem;
}

.project-info h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 0 0 0.5rem;
}

.project-info p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

.projects-cta {
  text-align: center;
}

/* Testimonials */
.testimonials-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonial-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
}

.testimonial-stars {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.2rem;
}

.testimonial-stars svg {
  width: 18px;
  height: 18px;
  color: #f59e0b;
}

.testimonial-text {
  color: #334155;
  line-height: 1.8;
  margin: 0 0 1.5rem;
  font-size: 0.95rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-info strong {
  color: #0d1b2a;
  font-size: 0.95rem;
}

.author-info span {
  color: #64748b;
  font-size: 0.85rem;
}

/* CTA */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
}

.cta-box {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 3rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}

.cta-box h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.2rem;
  color: #0d1b2a;
  margin: 0 0 1rem;
}

.cta-box p {
  color: #64748b;
  font-size: 1.1rem;
  margin: 0 0 2rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1.5rem 3rem;
  }
  .orb-1 {
    width: 340px;
    height: 340px;
    right: -18%;
    top: -18%;
  }
  .orb-2 {
    width: 280px;
    height: 280px;
    bottom: -18%;
    left: -18%;
  }
  .orb-3 {
    width: 240px;
    height: 240px;
    top: 34%;
    left: 18%;
  }
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  .hero-stat-divider {
    display: none;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .process-grid {
    grid-template-columns: 1fr;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  .cta-box {
    padding: 2.5rem 1.5rem;
  }
  .cta-box h2 {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 1rem 2.5rem;
  }
  .hero-title {
    font-size: clamp(2rem, 10vw, 3rem);
  }
  .hero-subtitle {
    font-size: 1rem;
    max-width: 100%;
  }
  .hero-cta {
    flex-direction: column;
    gap: 0.9rem;
  }
  .hero-stat {
    width: 100%;
  }
  .projects-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>

