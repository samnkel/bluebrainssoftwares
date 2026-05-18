<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-row">
            <img src="../assets/383d585a-515d-48e8-927e-31779cd77528 (1).png" alt="BlueBrains Logo" class="footer-logo" />
            <h2><span class="blue">Blue</span><span class="dark">Brains</span></h2>
          </div>
          <p class="brand-subtitle">SOFTWARES</p>
          <p>Building digital excellence for businesses that want to thrive online.</p>
          <div class="social-links">
            <a href="mailto:samnkelisiwempiyonke@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
            <a href="https://www.linkedin.com/in/samnkelisiwe-mpiyonke-3419573b1/" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href="https://github.com/samnkel" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Services</h4>
          <ul>
            <li><RouterLink to="/services">Web Development</RouterLink></li>
            <li><RouterLink to="/services">Software Systems</RouterLink></li>
            <li><RouterLink to="/services">Online Business</RouterLink></li>
            <li><RouterLink to="/services">Maintenance</RouterLink></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Contact</h4>
          <ul>

            <li>bbsoftwares@outlook.com</li>
            <li>066 038 2775</li>
            <li>10122 liwa street, philippi east</li>
            <li>Cape Town, WP</li>
            <li>bluebrains@softwares.com</li>
            <li>+27 66 038 2755</li>
            <li>10122 liwa street philippi east</li>
            <li>Cape Town, RSA 7750</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} BlueBrains Software. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #0d1b2a;
  color: #94a3b8;
  padding: 4rem 0 2rem;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: clamp(1.5rem, 2vw, 3rem);
  margin-bottom: 3rem;
}

.footer-brand h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  margin: 0 0 1rem;
  letter-spacing: 2px;
}

.footer-brand .blue {
  color: #1e88e5;
}

.footer-brand .dark {
  color: white;
}

.logo-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}

.footer-logo {
  height: 40px;
  width: auto;
  display: block;
}

.footer-brand h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  letter-spacing: 2px;
}

.brand-subtitle {
  font-size: 0.75rem;
  letter-spacing: 4px;
  color: #6c757d;
  margin: 0 0 1rem 48px;
  position: relative;
}

.brand-subtitle::before,
.brand-subtitle::after {
  content: "";
  display: inline-block;
  width: 30px;
  height: 2px;
  background: #1e88e5;
  margin: 0 8px;
  vertical-align: middle;
}

.footer-brand p {
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #1e88e5;
  color: white;
  transform: translateY(-3px);
}

.social-links svg {
  width: 18px;
  height: 18px;
}

.footer-links h4 {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1.2rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.7rem;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #1e88e5;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-brand p,
  .footer-links {
    max-width: 100%;
  }
  .footer-bottom {
    text-align: left;
  }
}
</style>