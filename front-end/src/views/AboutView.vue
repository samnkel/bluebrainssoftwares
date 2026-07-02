<template>
  <div class="page">
    <!-- Hero Section -->
    <section class="page-header">
      <div class="container">
        <h1>About BlueBrains Software</h1>
        <p>At BlueBrains Software, we create modern, reliable, and user-focused digital solutions that help businesses grow.</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content">
      <div class="container">
        <!-- Who We Are Section -->
        <section class="section">
          <h2>Who We Are</h2>
          <p class="section-intro">BlueBrains Software is a software development company dedicated to transforming ideas into innovative digital solutions.</p>
          <p>We work with startups, small businesses, and organizations to create secure, scalable, and high-quality software that improves efficiency and delivers real business value. Whether it's a professional website, a mobile application, or a custom business system, we combine creativity with technical expertise to deliver products that make a difference.</p>
        </section>

        <!-- Founder Section -->
        <section class="founder-section">
          <div class="founder-card">
            <div class="founder-content">
              <h3>Our Founder</h3>
              <p class="founder-name">Samnkelisiwe Mpiyonke</p>
              <p class="founder-bio">Founded by Samnkelisiwe Mpiyonke, BlueBrains Software is driven by a passion for creating practical, high-quality software solutions that empower businesses and individuals.</p>
            </div>
            <div class="founder-accent"></div>
          </div>
        </section>

        <!-- Mission & Vision Cards -->
        <section class="mission-vision">
          <div class="mv-card">
            <div class="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>Our mission is to empower businesses through technology by delivering innovative, reliable, and user-friendly software solutions that solve real-world challenges and support long-term growth.</p>
          </div>
          <div class="mv-card">
            <div class="mv-icon">🚀</div>
            <h3>Our Vision</h3>
            <p>To become a trusted technology partner recognized for delivering impactful software solutions that help businesses succeed in the digital world.</p>
          </div>
        </section>

        <!-- Our Services Section -->
        <section class="section services-highlight">
          <h2>What We Do</h2>
          <div class="services-list">
            <div class="service-item">🌐 Custom Website Development</div>
            <div class="service-item">📱 Mobile App Development</div>
            <div class="service-item">💻 Business Software Solutions</div>
            <div class="service-item">🛒 E-commerce Development</div>
            <div class="service-item">☁️ API Integration</div>
            <div class="service-item">🗄️ Database Design</div>
            <div class="service-item">🔒 System Maintenance & Support</div>
            <div class="service-item">🚀 Software Deployment</div>
          </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="section why-choose">
          <h2>Why Choose BlueBrains Software?</h2>
          <div class="benefits-grid">
            <div class="benefit">
              <div class="benefit-icon">✨</div>
              <h4>Modern & Responsive</h4>
              <p>Modern and responsive designs that work on all devices</p>
            </div>
            <div class="benefit">
              <div class="benefit-icon">🔧</div>
              <h4>Clean Code</h4>
              <p>Clean, maintainable code that's easy to update</p>
            </div>
            <div class="benefit">
              <div class="benefit-icon">👥</div>
              <h4>Client-Focused</h4>
              <p>Client-focused development process with transparent communication</p>
            </div>
            <div class="benefit">
              <div class="benefit-icon">🔒</div>
              <h4>Secure & Scalable</h4>
              <p>Secure and scalable applications built to grow with your business</p>
            </div>
            <div class="benefit">
              <div class="benefit-icon">⏱️</div>
              <h4>Timely Delivery</h4>
              <p>Timely project delivery without compromising quality</p>
            </div>
            <div class="benefit">
              <div class="benefit-icon">🛟</div>
              <h4>Ongoing Support</h4>
              <p>Ongoing technical support and maintenance after launch</p>
            </div>
          </div>
        </section>

        <!-- Development Process Section -->
        <section class="section process-section">
          <h2>Our Development Process</h2>
          <p class="section-intro">A proven 6-step methodology for every project</p>
          <div class="process-grid">
            <div class="process-step">
              <div class="step-number">1</div>
              <h4>Discovery</h4>
              <p>We understand your goals, challenges, and project requirements</p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h4>Planning</h4>
              <p>We design the architecture and create a roadmap for development</p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h4>Development</h4>
              <p>We build your software using modern technologies and best practices</p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h4>Testing</h4>
              <p>We thoroughly test functionality, performance, and security</p>
            </div>
            <div class="process-step">
              <div class="step-number">5</div>
              <h4>Deployment</h4>
              <p>We launch your solution and ensure everything runs smoothly</p>
            </div>
            <div class="process-step">
              <div class="step-number">6</div>
              <h4>Support</h4>
              <p>We provide updates, maintenance, and technical assistance</p>
            </div>
          </div>
        </section>

        <!-- Core Values Section -->
        <section class="section core-values">
          <h2>Our Core Values</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>We embrace new technologies to deliver better solutions.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">⭐</div>
              <h4>Quality</h4>
              <p>We prioritize clean code, reliability, and excellent user experiences.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>We communicate honestly and work transparently with every client.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h4>Collaboration</h4>
              <p>We work closely with clients throughout every stage of development.</p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-final">
          <h2>Ready to Bring Your Idea to Life?</h2>
          <p>Let's build software that helps your business grow.</p>
          <RouterLink to="/contact" class="btn-primary btn-large">Contact Us Today</RouterLink>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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
  color: white;
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

/* Section Styling */
.section {
  margin-bottom: 6rem;
}

.section h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #0d1b2a;
  margin: 0 0 2rem;
  text-align: center;
}

.section-intro {
  font-size: 1.1rem;
  color: #1e88e5;
  text-align: center;
  margin: 0 0 1.5rem;
  font-weight: 600;
}

.section > p {
  color: #475569;
  line-height: 1.8;
  margin: 0 0 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Founder Section */
.founder-section {
  margin-bottom: 6rem;
}

.founder-card {
  background: linear-gradient(135deg, #1e88e5, #1565c0);
  border-radius: 20px;
  padding: 4rem;
  color: white;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: center;
}

.founder-content h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem;
  font-weight: 600;
}

.founder-name {
  font-family: "Space Grotesk", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1.5rem;
}

.founder-bio {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
}

.founder-accent {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.15), transparent);
  border-radius: 20px;
}

@media (max-width: 768px) {
  .founder-card {
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
  }

  .founder-accent {
    display: none;
  }

  .founder-name {
    font-size: 1.5rem;
  }
}

/* Mission & Vision Cards */
.mission-vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 6rem;
}

.mv-card {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;
}

.mv-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(30, 136, 229, 0.1);
  border-color: #1e88e5;
}

.mv-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.mv-card h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  color: #0d1b2a;
  margin: 0 0 1rem;
}

.mv-card p {
  color: #475569;
  line-height: 1.7;
}

/* Services Highlight */
.services-highlight h2 {
  margin-bottom: 3rem;
}

.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.service-item {
  background: white;
  border: 2px solid #e2e8f0;
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  color: #0d1b2a;
  transition: all 0.3s ease;
  text-align: center;
}

.service-item:hover {
  border-color: #1e88e5;
  background: rgba(30, 136, 229, 0.05);
  transform: translateY(-3px);
}

/* Why Choose Us */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.benefit {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;
}

.benefit:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(30, 136, 229, 0.15);
  border-color: #1e88e5;
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.benefit h4 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 0 0 0.8rem;
}

.benefit p {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Process Grid */
.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.process-step {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  position: relative;
  border-left: 4px solid #1e88e5;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #1e88e5;
  color: white;
  border-radius: 50%;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.process-step h4 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 1rem 0 0.8rem;
}

.process-step p {
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Core Values */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  border-color: #1e88e5;
  transform: scale(1.05);
  box-shadow: 0 15px 35px rgba(30, 136, 229, 0.1);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.value-card h4 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 0 0 1rem;
}

.value-card p {
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* CTA Final */
.cta-final {
  text-align: center;
  padding: 4rem 3rem;
  background: linear-gradient(135deg, #0d1b2a, #1e3a5f);
  border-radius: 24px;
  color: white;
  margin-top: 6rem;
}

.cta-final h2 {
  color: white;
  font-size: 2.2rem;
  margin: 0 0 1rem;
}

.cta-final p {
  color: #cbd5e1;
  font-size: 1.1rem;
  margin: 0 0 2rem;
}

.btn-primary, .btn-large {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  background: #1e88e5;
  color: white;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover, .btn-large:hover {
  background: #1565c0;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(30, 136, 229, 0.3);
}

.btn-large {
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .mission-vision {
    grid-template-columns: 1fr;
  }

  .section h2 {
    font-size: 2rem;
  }

  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .services-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-final {
    padding: 3rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .page-header {
    padding: 6rem 0 3rem;
  }

  .section {
    margin-bottom: 4rem;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .services-list {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    justify-content: flex-start;
  }
}
</style>

