<template>
  <div class="overlay-page contact-page">
    <div class="overlay-content">
      <div class="overlay-header">
        <h1 class="overlay-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
          </svg>
          Let's talk
        </h1>
        <button class="overlay-close" @click="$emit('close')" aria-label="Close overlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="contact-intro">
        <p>Ready to start your next project? Get in touch and let's discuss how we can work together to achieve your goals.</p>
      </div>

      <div class="contact-content">
        <ContactForm @success="handleContactSuccess" />

        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Call</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Write</h3>
              <p>tinendra.kandula@gmail.com</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="2"/>
                <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Connect</h3>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/tinendra-kumar/" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://x.com/TinendraKumar/" class="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ContactForm from '@/components/common/ContactForm.vue'
import { useVisitorTracking } from '@/composables/useVisitorTracking'

export default {
  name: 'Contact',
  components: {
    ContactForm
  },
  emits: ['close'],
  setup() {
    const { trackPageView } = useVisitorTracking()

    const handleContactSuccess = () => {
      alert('Thank you for your message! I will get back to you soon.')
    }

    onMounted(() => {
      trackPageView('contact')
    })

    return {
      handleContactSuccess
    }
  }
}
</script>

<style scoped>
.contact-page {
  color: white;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  animation: slideInUp 0.5s ease-out;
}

.overlay-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(59, 130, 246, 0.3);
}

.overlay-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin: 0;
}

.overlay-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.overlay-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.contact-intro {
  margin-bottom: 2rem;
}

.contact-intro p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #E2E8F0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 0.75rem;
  color: #60A5FA;
  flex-shrink: 0;
}

.contact-details h3 {
  color: white;
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
}

.contact-details p {
  color: #CBD5E1;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  color: #60A5FA;
  text-decoration: none;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: rgba(96, 165, 250, 0.2);
  transform: translateY(-1px);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 1rem;
  }

  .overlay-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .overlay-title {
    font-size: 2rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    order: -1;
  }
}
</style>