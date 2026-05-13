<template>
  <div class="page">
    <section class="page-header">
      <div class="container">
        <h1>Get In Touch</h1>
        <p>Have a project in mind? We would love to hear about it.</p>
      </div>
    </section>
    <section class="content">
      <div class="container">
        <div class="contact-grid">
          <div class="info">
            <h2>Let us Start a Conversation</h2>
            <p>Whether you have a clear vision or just a rough idea, we are here to help.</p>
            <div class="info-items">
              <div class="item">
                <strong>Email</strong>
                <span>bbsoftwares@outlook.com</span>
              </div>
              <div class="item">
                <strong>Phone</strong>
                <span>066 038 2775</span>
              </div>
              <div class="item">
                <strong>Location</strong>
                <span>10122 Liwa street, Cape Town, WP</span>
              </div>
            </div>
          </div>
          <div class="form-wrapper">
            <form class="form" @submit.prevent="submit">
              <div class="group">
                <label>Name</label>
                <input v-model="form.name" placeholder="Your name" required />
              </div>
              <div class="group">
                <label>Email</label>
                <input v-model="form.email" type="email" placeholder="your@email.com" required />
              </div>
              <div class="group">
                <label>Message</label>
                <textarea v-model="form.message" rows="5" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" class="btn" :disabled="sending">{{ sending ? "Sending..." : "Send Message" }}</button>
              <div v-if="sent" class="success">Thank you! We will get back to you within 24 hours.</div>
              <div v-if="error" class="error">Something went wrong. Please try again later.</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const form = ref({ name: "", email: "", message: "" });
const sending = ref(false);
const sent = ref(false);
const error = ref(false);

const submit = async () => {
  sending.value = true;
  sent.value = false;
  error.value = false;

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    sent.value = true;
    form.value = { name: "", email: "", message: "" };
    setTimeout(() => (sent.value = false), 5000);
  } catch (err) {
    console.error("EmailJS Error:", err);
    error.value = true;
    setTimeout(() => (error.value = false), 5000);
  } finally {
    sending.value = false;
  }
};
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
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.info h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.8rem;
  color: #0d1b2a;
  margin: 0 0 1rem;
}
.info > p {
  color: #64748b;
  line-height: 1.7;
  margin: 0 0 2rem;
}
.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.item strong {
  display: block;
  color: #0d1b2a;
  font-size: 1rem;
}
.item span {
  color: #64748b;
  font-size: 0.9rem;
}
.form-wrapper {
  background: #f8fafc;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
}
.group input,
.group textarea {
  padding: 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.95rem;
  background: white;
  font-family: inherit;
}
.group input:focus,
.group textarea:focus {
  outline: none;
  border-color: #1e88e5;
}
.btn {
  padding: 1rem;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn:hover:not(:disabled) {
  background: #1565c0;
}
.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.success {
  text-align: center;
  color: #16a34a;
  font-weight: 500;
  padding: 0.8rem;
  background: rgba(22, 163, 74, 0.1);
  border-radius: 8px;
}
.error {
  text-align: center;
  color: #dc2626;
  font-weight: 500;
  padding: 0.8rem;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 8px;
}
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
@media (max-width: 768px) {
  .form-wrapper {
    padding: 1.5rem;
  }
}
</style>
