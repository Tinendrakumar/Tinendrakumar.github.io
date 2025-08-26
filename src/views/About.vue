<template>
  <div class="overlay-page about-page">
    <div class="overlay-content">
      <div class="overlay-header">
        <h1 class="overlay-title">About Me</h1>
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
            <h3>My Journey</h3>
            <p>
              My career in Machine Learning began with a fascination for bringing order 
              to complex challenges. Over the years, I've had the privilege of working with 
              diverse teams across various industries, from research labs to established enterprises.
            </p>
          </div>

          <div class="about-section">
            <h3>Philosophy</h3>
            <p>
              I believe in the power of collaborative leadership and data-driven decision making. 
              My approach combines strategic thinking with hands-on execution, ensuring projects 
              not only meet their objectives but exceed expectations.
            </p>
          </div>

          <div class="about-section">
            <h3>Specializations</h3>
            <div class="specializations-grid">
              <div class="specialization-card">
                <div class="card-icon">🚀</div>
                <h4>AI Research</h4>
                <p>Exploring cutting-edge AI technologies and methodologies</p>
              </div>
              <div class="specialization-card">
                <div class="card-icon">⚡</div>
                <h4>Cloud Computing</h4>
                <p>Leveraging cloud technologies for scalable AI solutions</p>
              </div>
              <div class="specialization-card">
                <div class="card-icon">👥</div>
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
            <h3>Beyond Work I'm Passionate About</h3>
            <p>
              Well, when I'm not immersed in the world of AI, I enjoy exploring the latest advancements in technology,
              reading about the intersection of AI and society, and engaging in community initiatives that promote
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
.overlay-page {
  color: white;
  padding: 2rem;
  max-width: 800px;
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

.about-intro {
  margin-bottom: 3rem;
}

.about-intro h2 {
  color: #60A5FA;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.about-intro p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #E2E8F0;
}

.about-sections {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.about-section h3 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.about-section p {
  line-height: 1.6;
  color: #CBD5E1;
  margin-bottom: 1rem;
}

.specializations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.specialization-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  text-align: center;
}

.specialization-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.specialization-card h4 {
  color: #60A5FA;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.specialization-card p {
  font-size: 0.875rem;
  margin: 0;
  color: #CBD5E1;
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
  .overlay-page {
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

  .specializations-grid {
    grid-template-columns: 1fr;
  }
}
</style>