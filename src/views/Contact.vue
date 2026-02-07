<template>
  <div class="overlay-page contact-page">

    <div class="overlay-content">
      <div class="overlay-header">
        <h1 class="overlay-title">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
          </svg>
          💬 Let's Connect
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
              <p>+1 (617) 807-0490 </p>
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
import { ref, onMounted, onUnmounted } from 'vue'
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
    const networkCanvas = ref(null)
    let animationId = null

    const handleContactSuccess = () => {
      alert('Thank you for your message! I will get back to you soon.')
    }

    const initNetworkAnimation = () => {
      const canvas = networkCanvas.value
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const nodes = []
      const nodeCount = 50

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 2
        })
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Update and draw nodes
        nodes.forEach(node => {
          node.x += node.vx
          node.y += node.vy

          if (node.x < 0 || node.x > canvas.width) node.vx *= -1
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1

          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(96, 165, 250, 0.6)'
          ctx.fill()
        })

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(nodes[i].x, nodes[i].y)
              ctx.lineTo(nodes[j].x, nodes[j].y)
              ctx.strokeStyle = `rgba(96, 165, 250, ${(1 - distance / 150) * 0.2})`
              ctx.stroke()
            }
          }
        }

        animationId = requestAnimationFrame(animate)
      }

      animate()
    }

    onMounted(() => {
      trackPageView('contact')
      setTimeout(initNetworkAnimation, 100)

      window.addEventListener('resize', () => {
        if (networkCanvas.value) {
          networkCanvas.value.width = window.innerWidth
          networkCanvas.value.height = window.innerHeight
        }
      })
    })

    onUnmounted(() => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    })

    return {
      handleContactSuccess,
      networkCanvas
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: clamp(1rem, 3vw, 2rem);
  max-width: 1100px;
  margin: 0 auto;
  animation: slideInUp 0.5s ease-out;
  background: transparent;
}

/* Premium Network Background */
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
  animation: float 25s infinite alternate ease-in-out;
}

.blob-1 {
  top: 20%;
  left: 10%;
  width: 500px;
  height: 500px;
  background: var(--gradient-primary);
  animation-duration: 25s;
}

.blob-2 {
  bottom: 20%;
  right: 10%;
  width: 600px;
  height: 600px;
  background: var(--gradient-secondary);
  animation-duration: 30s;
  animation-delay: -10s;
}

.network-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
}

.code-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
  background-size: 30px 30px;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, 20px) scale(1.1); }
}

.overlay-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  padding-bottom: clamp(1rem, 2vw, 1.5rem);
  border-bottom: 2px solid var(--color-border-light);
}

.overlay-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  background: var(--gradient-cosmic);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.overlay-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(2.5rem, 5vw, 3rem);
  height: clamp(2.5rem, 5vw, 3rem);
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  border-radius: 0.75rem;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.overlay-close:hover {
  background: var(--color-background-accent);
  transform: rotate(90deg) scale(1.1);
}

.contact-intro {
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  text-align: center;
}

.contact-intro p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: clamp(2rem, 4vw, 3rem);
  margin-top: clamp(1.5rem, 3vw, 2rem);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.contact-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-300);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--color-background-accent);
  border-radius: 0.75rem;
  color: var(--color-primary-500);
  flex-shrink: 0;
}

.contact-details h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 700;
}

.contact-details p {
  color: var(--color-text-primary);
  margin: 0;
  font-size: clamp(0.875rem, 1.6vw, 0.9375rem);
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-link {
  color: var(--color-primary-600);
  text-decoration: none;
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
  font-weight: 700;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: var(--color-background-accent);
  transform: translateY(-2px);
  border-color: var(--color-primary-400);
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 1rem;
  }

  .overlay-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .overlay-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    order: -1;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  .animated-bg * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>