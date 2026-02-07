<template>
  <div class="overlay-page about-page">

    <div class="overlay-content">
      <div class="overlay-header">
        <h1 class="overlay-title">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
          </svg>
          👨‍💻 About Me
        </h1>
        <button class="overlay-close" @click="$emit('close')" aria-label="Close overlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="about-content">
        <div class="about-intro">
          <h2>Machine Learning Engineer</h2>
          <p>
            I'm Tinendra Kandula, a passionate Machine Learning Engineer with extensive experience 
            in designing and deploying advanced AI systems. My expertise 
            lies in Generative AI, multi‑modal learning, and NLP, with a strong focus on AWS/SageMaker.
          </p>
        </div>

        <div class="about-sections">
          <div class="about-section">
            <h3>🚀 My Journey</h3>
            <p>
              My career in Machine Learning began with a fascination for bringing order 
              to complex challenges. Over the years, I've had the privilege of working with 
              diverse teams across various industries, from research labs to established enterprises.
            </p>
          </div>

          <div class="about-section">
            <h3>💡 Philosophy</h3>
            <p>
              I believe in the power of collaborative leadership and data-driven decision making. 
              My approach combines strategic thinking with hands-on execution, ensuring projects 
              not only meet their objectives but exceed expectations.
            </p>
          </div>

          <div class="about-section">
            <h3>⚡ Specializations</h3>
            <div class="specializations-grid">
              <div class="specialization-card">
                <div class="card-icon">🚀</div>
                <h4>AI Research</h4>
                <p>Exploring cutting-edge AI technologies and methodologies</p>
              </div>
              <div class="specialization-card">
                <div class="card-icon">☁️</div>
                <h4>Cloud Computing</h4>
                <p>Leveraging cloud technologies for scalable AI solutions</p>
              </div>
              <div class="specialization-card">
                <div class="card-icon">🤖</div>
                <h4>Machine Learning</h4>
                <p>Designing and deploying ML models for real-world applications</p>
              </div>
              <div class="specialization-card">
                <div class="card-icon">📊</div>
                <h4>Data Strategy</h4>
                <p>Developing data-driven strategies for business growth</p>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h3>🎯 Beyond Work</h3>
            <p>
              When I'm not immersed in the world of AI, I enjoy exploring the latest advancements in technology,
              reading about the intersection of AI and society, and engaging in community initiatives that promote
              innovation and education in machine learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useVisitorTracking } from '@/composables/useVisitorTracking'

export default {
  name: 'About',
  emits: ['close'],
  setup() {
    const { trackPageView } = useVisitorTracking()

    onMounted(() => {
      trackPageView('about')
    })

    return {}
  }
}
</script>

<style scoped>
.about-page {
  padding: clamp(1rem, 3vw, 2rem);
  max-width: 900px;
  margin: 0 auto;
  animation: slideInUp 0.5s ease-out;
}

/* Premium Circuit Board Background */
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
  top: 15%;
  left: 15%;
  width: 500px;
  height: 500px;
  background: var(--gradient-primary);
  animation-duration: 25s;
}

.blob-2 {
  bottom: 15%;
  right: 15%;
  width: 600px;
  height: 600px;
  background: var(--gradient-aurora);
  animation-duration: 30s;
  animation-delay: -10s;
}

.hexagon-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(60deg, transparent, transparent 35px, rgba(59, 130, 246, 0.04) 35px, rgba(59, 130, 246, 0.04) 70px),
    repeating-linear-gradient(120deg, transparent, transparent 35px, rgba(139, 92, 246, 0.04) 35px, rgba(139, 92, 246, 0.04) 70px);
}

.circuit-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.08;
}

:global(.dark) .circuit-lines {
  opacity: 0.12;
}

.circuit-svg {
  width: 100%;
  height: 100%;
  color: var(--color-primary-500);
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, 25px) scale(1.05); }
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

.about-intro {
  margin-bottom: clamp(2rem, 4vw, 3rem);
  padding: clamp(1.5rem, 3vw, 2rem);
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
}

.about-intro h2 {
  color: var(--color-primary-600);
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: 1rem;
  font-weight: 700;
}

.about-intro p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

.about-sections {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.about-section h3 {
  color: var(--color-text-primary);
  font-size: clamp(1.125rem, 2.2vw, 1.25rem);
  margin-bottom: 1rem;
  font-weight: 700;
}

.about-section p {
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  font-size: clamp(0.9375rem, 1.8vw, 1rem);
}

.specializations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.specialization-card {
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: center;
}

.specialization-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-300);
}

.card-icon {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.specialization-card h4 {
  color: var(--color-primary-600);
  margin-bottom: 0.5rem;
  font-size: clamp(0.9375rem, 1.8vw, 1rem);
  font-weight: 700;
}

.specialization-card p {
  font-size: clamp(0.8125rem, 1.6vw, 0.875rem);
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.5;
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .about-page {
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

  .specializations-grid {
    grid-template-columns: 1fr;
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