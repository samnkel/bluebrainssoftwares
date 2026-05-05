<template>
  <div class="page">
    <section class="page-header"><div class="container"><h1>Our Services</h1><p>Comprehensive digital solutions for your business growth.</p></div></section>

    <section class="services-section">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="s in services" :key="s.title" :class="{ featured: s.featured }">
            <div class="service-icon" :style="{ background: s.iconBg, color: s.iconColor }">{{ s.icon }}</div>
            <h2>{{ s.title }}</h2>
            <p>{{ s.desc }}</p>
            <ul><li v-for="f in s.features" :key="f">{{ f }}</li></ul>
          </div>
          </div>
      </div>
      <div class="services-footer">
        <p>Don't see exactly what you need? <RouterLink to="/contact" class="btn-secondary">Contact Us</RouterLink> for a custom solution.</p>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <SectionTitle badge="How We Deliver" title="Our Approach" subtitle="A proven 6-step methodology for every project." />
        <div class="process-grid">
          <div class="process-step" v-for="step in process" :key="step.num">
            <span class="num">{{ step.num }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
      </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Ready to Get Started?</h2>
          <p>Let us discuss your project and find the right solution for your business.</p>
          <RouterLink to="/contact" class="btn-primary">Start Your Project</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionTitle from "../components/SectionTitle.vue"
const services = [
  {
    "title": "Web Development",
    "desc": "Custom, responsive websites and web applications built with modern technologies that convert visitors into loyal customers.",
    "icon": "WD",
    "iconBg": "rgba(30,136,229,0.1)",
    "iconColor": "#1e88e5",
    "featured": false,
    "features": [
      "Responsive and Mobile-First Design",
      "SEO and Performance Optimized",
      "CMS and Admin Dashboard",
      "API Integrations"
    ]
  },
  {
    "title": "Software Systems",
    "desc": "Tailored CRM, ERP, and business automation solutions that streamline operations and scale with your growth.",
    "icon": "SS",
    "iconBg": "rgba(34,197,94,0.1)",
    "iconColor": "#22c55e",
    "featured": true,
    "features": [
      "Custom CRM and ERP Systems",
      "Database Architecture",
      "REST and GraphQL APIs",
      "Cloud Infrastructure"
    ]
  },
  {
    "title": "Online Business",
    "desc": "End-to-end e-commerce and digital marketing solutions designed to grow your revenue and market presence.",
    "icon": "OB",
    "iconBg": "rgba(244,114,182,0.1)",
    "iconColor": "#f472b6",
    "featured": false,
    "features": [
      "E-commerce Store Development",
      "Payment Gateway Integration",
      "Marketing Automation",
      "Conversion Optimization"
    ]
  },
  {
    "title": "Maintenance and Support",
    "desc": "Comprehensive ongoing support, security updates, and performance tuning to keep your digital assets running flawlessly.",
    "icon": "MS",
    "iconBg": "rgba(245,158,11,0.1)",
    "iconColor": "#f59e0b",
    "featured": false,
    "features": [
      "24/7 Uptime Monitoring",
      "Security Patches and Updates",
      "Performance Optimization",
      "Monthly Reports"
    ]
  }
];
const process = [
  {
    "num": "01",
    "title": "Discovery",
    "desc": "Understand your goals, users, and requirements."
  },
  {
    "num": "02",
    "title": "Planning",
    "desc": "Roadmap with milestones and deliverables."
  },
  {
    "num": "03",
    "title": "Design",
    "desc": "UI/UX prototypes for your approval."
  },
  {
    "num": "04",
    "title": "Development",
    "desc": "Clean, scalable code with agile sprints."
  },
  {
    "num": "05",
    "title": "Testing",
    "desc": "QA, performance, and cross-browser checks."
  },
  {
    "num": "06",
    "title": "Launch",
    "desc": "Deploy, monitor, and iterate."
  }
];
</script>

<style scoped>
.page-header { padding: 8rem 0 4rem; background: linear-gradient(135deg, #fafafa, hsl(208, 73%, 57%), #cadfff); text-align: center; color: white; }
.page-header h1 { font-family: "Space Grotesk", sans-serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin: 0 0 1rem; }
.page-header p { font-size: 1.2rem; color: #94a3b8; max-width: 600px; margin: 0 auto; }

.services-section { padding: 5rem 0; background: white; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; }
.services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
.service-card { background: white; border-radius: 20px; padding: 2.5rem; border: 1px solid #e2e8f0; transition: all 0.3s ease; }
.service-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
.service-card.featured { border-color: #1e88e5; box-shadow: 0 0 0 1px #1e88e5; }
.service-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-family: "Space Grotesk", sans-serif; font-size: 1rem; font-weight: 700; }
.service-card h2 { font-family: "Space Grotesk", sans-serif; font-size: 1.3rem; color: #0d1b2a; margin: 0 0 0.8rem; }
.service-card p { color: #64748b; line-height: 1.7; margin: 0 0 1.2rem; font-size: 0.95rem; }
.service-card ul { list-style: none; padding: 0; margin: 0; }
.service-card li { color: #334155; font-size: 0.9rem; padding: 0.3rem 0; padding-left: 1.2rem; position: relative; }
.service-card li::before { content: ""; position: absolute; left: 0; top: 0.65rem; width: 6px; height: 6px; border-radius: 50%; background: #22c55e; }

.process-section { padding: 5rem 0; background: linear-gradient(135deg, #f8fafc, #e2e8f0); }
.process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.process-step { background: white; border-radius: 16px; padding: 2rem; border: 1px solid #e2e8f0; transition: all 0.3s ease; }
.process-step:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(0,0,0,0.06); }
.num { font-family: "Space Grotesk", sans-serif; font-size: 2rem; font-weight: 800; color: #e2e8f0; line-height: 1; display: block; margin-bottom: 1rem; }
.process-step h3 { font-family: "Space Grotesk", sans-serif; font-size: 1.1rem; color: #0d1b2a; margin: 0 0 0.5rem; }
.process-step p { color: #64748b; font-size: 0.9rem; line-height: 1.7; margin: 0; }

.cta-section { padding: 5rem 0; background: white; }
.cta-box { text-align: center; max-width: 700px; margin: 0 auto; padding: 4rem 3rem; background: linear-gradient(135deg, #0d1b2a, #1e3a5f); border-radius: 24px; color: white; }
.cta-box h2 { font-family: "Space Grotesk", sans-serif; font-size: 2.2rem; margin: 0 0 1rem; }
.cta-box p { color: #94a3b8; font-size: 1.1rem; margin: 0 0 2rem; }
.btn-primary { display: inline-flex; align-items: center; padding: 1rem 2.5rem; border-radius: 12px; font-weight: 600; text-decoration: none; font-size: 1.1rem; background: #1e88e5; color: white; transition: all 0.3s ease; }
.btn-primary:hover { background: #1565c0; transform: translateY(-3px); }

@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .process-grid { grid-template-columns: 1fr; }
  .cta-box { padding: 2.5rem 1.5rem; }
  .cta-box h2 { font-size: 1.6rem; }
}
</style>    