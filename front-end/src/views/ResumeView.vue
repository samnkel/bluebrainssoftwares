<template>
  <div class="page">
    <section class="page-header">
      <div class="container">
        <h1>Professional Resume</h1>
        <p>Software Developer with expertise in programming, robotics, and software development methodologies.</p>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="resume-grid">
          <aside class="sidebar">
            <div class="profile-card">
              <div class="avatar">
                <span>SM</span>
              </div>
              <h2>Samnkelisiwe Mpiyonke</h2>
              <p class="title">Software Developer</p>
              <div class="contact-info">
                <div class="contact-item">
                  <strong>Email</strong>
                  <span>samnkelisiwempiyonke@gmail.com</span>
                </div>
                <div class="contact-item">
                  <strong>Phone</strong>
                  <span>066 038 2775</span>
                </div>
                <div class="contact-item">
                  <strong>Location</strong>
                  <span>Cape Town, WP, South Africa</span>
                </div>
              </div>
            </div>

            <div class="skills-card">
              <h3>Technical Skills</h3>
              <div class="skill-category">
                <h4>Programming & Development</h4>
                <div class="skill-tags">
                  <span class="tag">Python</span>
                  <span class="tag">JavaScript</span>
                  <span class="tag">Vue.js</span>
                  <span class="tag">Node.js</span>
                  <span class="tag">MySQL</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>Robotics & Teaching</h4>
                <div class="skill-tags">
                  <span class="tag">Robotics Fundamentals</span>
                  <span class="tag">Electronics</span>
                  <span class="tag">Mechanics</span>
                  <span class="tag">Coding (Scratch)</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>Certificates & Skills</h4>
                <div class="skill-tags">
                  <span class="tag">AI & Machine Learning</span>
                  <span class="tag">Microsoft Azure</span>
                  <span class="tag">Cybersecurity</span>
                  <span class="tag">Mentoring & Facilitation</span>
                </div>
              </div>
            </div>
          </aside>

          <div class="main-content">
            <div class="section">
              <h2 class="section-title">Professional Summary</h2>
              <p>
                Passionate Software Developer with experience in coding, robotics, and educational facilitation. Skilled in programming languages such as Python and JavaScript, with a strong background in teaching mathematical literacy and robotics fundamentals. Certified in AI, computer vision, and cybersecurity, with a keen interest in emerging technologies and continuous learning.
              </p>
            </div>

            <div class="section">
              <h2 class="section-title">Work Experience</h2>
              <div class="experience-item">
                <div class="experience-header">
                  <h3>Software Developer</h3>
                  <span class="company">Current Role</span>
                  <span class="period">2025 – Present</span>
                </div>
                <ul class="experience-list">
                  <li>Write clean, efficient, and maintainable code.</li>
                  <li>Design and develop software applications and systems.</li>
                  <li>Test, debug, and troubleshoot issues.</li>
                  <li>Collaborate with designers, analysts, and other developers.</li>
                  <li>Maintain and update existing software.</li>
                  <li>Use version control systems (e.g., Git).</li>
                  <li>Follow agile development methodologies.</li>
                  <li>Document code and system processes.</li>
                </ul>
              </div>
              <div class="experience-item">
                <div class="experience-header">
                  <h3>Facilitator, Mathematical Literacy & Robotics</h3>
                  <span class="company">Beautifulgate SA</span>
                  <span class="period">2022 – 2025</span>
                </div>
                <ul class="experience-list">
                  <li>Assist learners in interpreting graphs, charts, and tables.</li>
                  <li>Teach financial literacy like budgeting, interest, and savings.</li>
                  <li>Support students with problem-solving and critical thinking skills.</li>
                  <li>Teach robotics fundamentals (mechanics, electronics, programming).</li>
                  <li>Guide learners in building and coding robots.</li>
                  <li>Introduce coding languages like Scratch.</li>
                </ul>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Education</h2>
              <div class="education-item">
                <h3>Grade 12</h3>
                <span class="school">Phakama High School</span>
                <span class="period">2015 – 2021</span>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Certifications</h2>
              <div class="cert-grid">
                <div class="cert-item">
                  <strong>Microsoft Azure Artificial Intelligence</strong>
                  <span>Grade: 93.88%</span>
                </div>
                <div class="cert-item">
                  <strong>Natural Language Processing in Microsoft Azure</strong>
                  <span>Grade: 93.40%</span>
                </div>
                <div class="cert-item">
                  <strong>AI-900: Microsoft Azure AI Fundamentals</strong>
                  <span>Grade: 90.60%</span>
                </div>
                <div class="cert-item">
                  <strong>Cybersecurity Cisco</strong>
                  <span>Completed Feb 2026</span>
                </div>
                <div class="cert-item">
                  <strong>Full Stack Software Development</strong>
                  <span>Life Choices Academy, ongoing since 09/2025</span>
                </div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Projects</h2>
              <ul>
                <li>Portfolio Website - Front-end & Back-end (04/2026)</li>
                <li>Mechanic Connect E-Commerce Project (03/2026)</li>
                <li>HR Software for Morden Tech Solutions (01/2026)</li>
              </ul>
            </div>

            <div class="section">
              <h2 class="section-title">Interests</h2>
              <ul>
                <li>Book Reading (history, biographical books)</li>
                <li>Cycling</li>
                <li>Music</li>
                <li>Coding & Emerging Technologies</li>
                <li>Fitness & Well-being</li>
              </ul>
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
  background: #f8fafc;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.resume-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 3rem;
  align-items: start;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: 100px;
}

.profile-card,
.skills-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e88e5, #0d1b2a);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.avatar span {
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.profile-card h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.4rem;
  color: #0d1b2a;
  margin: 0 0 0.3rem;
}

.title {
  color: #1e88e5;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item strong {
  display: block;
  color: #0d1b2a;
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
}

.contact-item span {
  color: #64748b;
  font-size: 0.9rem;
}

.skills-card h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 0 0 1.5rem;
}

.skill-category {
  margin-bottom: 1.2rem;
}

.skill-category:last-child {
  margin-bottom: 0;
}

.skill-category h4 {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f1f5f9;
  color: #334155;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.section {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
}

.section-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.4rem;
  color: #0d1b2a;
  margin: 0 0 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f5f9;
}

.section > p {
  color: #64748b;
  line-height: 1.8;
  margin: 0;
}

.experience-item {
  margin-bottom: 2rem;
}

.experience-item:last-child {
  margin-bottom: 0;
}

.experience-header {
  margin-bottom: 1rem;
}

.experience-header h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 0 0 0.3rem;
}

.company {
  color: #1e88e5;
  font-weight: 600;
  font-size: 0.95rem;
}

.period {
  display: block;
  color: #94a3b8;
  font-size: 0.85rem;
  margin-top: 0.2rem;
}

.experience-list {
  margin: 0;
  padding-left: 1.2rem;
  color: #64748b;
  line-height: 1.8;
}

.experience-list li {
  margin-bottom: 0.4rem;
}

.education-item {
  margin-bottom: 1.5rem;
}

.education-item:last-child {
  margin-bottom: 0;
}

.education-item h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #0d1b2a;
  margin: 0 0 0.3rem;
}

.school {
  color: #1e88e5;
  font-weight: 600;
  font-size: 0.95rem;
}

.education-item .period {
  margin-bottom: 0.3rem;
}

.education-item p {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.cert-item {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.2rem;
  border: 1px solid #e2e8f0;
}

.cert-item strong {
  display: block;
  color: #0d1b2a;
  margin-bottom: 0.3rem;
}

.cert-item span {
  color: #64748b;
  font-size: 0.85rem;
}

@media (max-width: 1024px) {
  .resume-grid {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .sidebar {
    grid-template-columns: 1fr;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 1.5rem;
  }
}
</style>