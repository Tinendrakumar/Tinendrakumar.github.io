<template>
  <div class="overlay-page projects-page">
    <!-- Premium Matrix Background -->
    <div class="animated-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="matrix-rain">
        <div v-for="i in 25" :key="i" class="matrix-column" :style="{ left: `${i * 4}%`, animationDelay: `${Math.random() * 3}s` }">
          <span v-for="j in 20" :key="j">{{ '{ } : ; < > / * + - = ( )'.split(' ')[Math.floor(Math.random() * 12)] }}</span>
        </div>
      </div>
      <div class="code-grid"></div>
    </div>

    <div class="overlay-content">
      <!-- Header with close button -->
      <div class="overlay-header">
        <h1 class="overlay-title">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          💻 Featured Projects
        </h1>
        <button class="overlay-close" @click="$emit('close')" aria-label="Close overlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Intro Section -->
      <div class="projects-intro">
        <p class="intro-text">
          Explore my portfolio of innovative machine learning and AI projects.
          Each project demonstrates my expertise in building intelligent systems and solving complex problems.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index" 
          :project="project"
          @click="openProject(project)"
          :style="{ animationDelay: `${index * 0.1}s` }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import { useVisitorTracking } from '@/composables/useVisitorTracking'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  emits: ['close'],
  setup() {
    const { trackPageView, trackInteraction } = useVisitorTracking()

    const projects = ref([
      {
        title: 'WebApp for Car Decision Platform',
        role: 'Full Stack Developer',
        description: 'An interactive web application that helps users make informed decisions between buying and leasing a car. Features real-time calculations, comparison charts, and financial analysis.',
        technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
        duration: '2 months',
        teamSize: 'Solo',
        highlights: [
          'Interactive buy vs lease calculator',
          'Real-time financial projections',
          'Responsive design for all devices',
          'Clean and intuitive user interface'
        ],
        githubUrl: 'https://github.com/Tinendrakumar/WebApp-for-Car-Decision-Platform',
        image: '/images/project1.jpg'
      },
      {
        title: 'Smart Stick for Visually Impaired People',
        role: 'ML Engineer',
        description: 'An assistive technology project using computer vision to help visually impaired individuals navigate their environment. Uses real-time object detection and audio feedback.',
        technologies: ['TensorFlow', 'OpenCV', 'Python', 'Raspberry Pi'],
        duration: '4 months',
        teamSize: '4 members',
        highlights: [
          'Real-time object detection with 90% accuracy',
          'Audio feedback system for obstacle detection',
          'Portable and battery-powered design',
          'Robotics Club award-winning project'
        ],
        image: '/images/project2.jpg'
      },
      {
        title: 'Ensemble Models for Gas Detection',
        role: 'Research Developer',
        description: 'Advanced machine learning models for detecting and classifying different types of gases using sensor data. Implemented ensemble methods for improved accuracy and reliability.',
        technologies: ['Python', 'MLP', 'Time Series Analysis', 'Scikit-learn'],
        duration: '3 months',
        teamSize: 'Solo',
        highlights: [
          '85% detection accuracy',
          'Multiple ensemble techniques implemented',
          'Time-series pattern recognition',
          'Real-time gas concentration prediction'
        ],
        githubUrl: 'https://github.com/Tinendrakumar/Ensemble-gas-analysis',
        image: '/images/project3.jpg'
      },
      {
        title: 'Radio Modulation Classification',
        role: 'Deep Learning Engineer',
        description: 'Deep learning solution for classifying radio signal modulations, crucial for 5G communications. Achieved high accuracy while significantly reducing model size for edge deployment.',
        technologies: ['CNN', 'Deep Learning', 'Python', 'PyTorch'],
        duration: '5 months',
        teamSize: '2 members',
        highlights: [
          '95% classification accuracy',
          '50x model size reduction',
          'Optimized for edge devices',
          '5G communication standards compliant'
        ],
        githubUrl: 'https://github.com/Tinendrakumar/Radio-Modulation-Classification',
        image: '/images/project4.jpg'
      }
    ])

    const openProject = (project) => {
      trackInteraction('project_view', 'projects', { project: project.title })
      if (project.githubUrl) {
        window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
      }
    }

    onMounted(() => {
      trackPageView('projects')
    })

    return {
      projects,
      openProject
    }
  }
}
</script>

<style scoped>
.projects-page {
  padding: clamp(1rem, 3vw, 2rem);
  max-width: 1400px;
  margin: 0 auto;
  animation: slideInUp 0.5s ease-out;
}

/* Premium Matrix Background */
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
  opacity: 0.3;
  animation: float 25s infinite alternate ease-in-out;
}

.blob-1 {
  top: 10%;
  left: 5%;
  width: 500px;
  height: 500px;
  background: var(--gradient-primary);
  animation-duration: 25s;
}

.blob-2 {
  bottom: 10%;
  right: 5%;
  width: 600px;
  height: 600px;
  background: var(--gradient-accent);
  animation-duration: 30s;
  animation-delay: -10s;
}

/* Matrix Rain Effect */
.matrix-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.06;
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

:global(.dark) .matrix-rain {
  opacity: 0.12;
}

.matrix-column {
  position: absolute;
  top: -100%;
  font-size: 16px;
  color: var(--color-primary-500);
  animation: matrix-fall 12s linear infinite;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@keyframes matrix-fall {
  0% {
    top: -100%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 110%;
    opacity: 0;
  }
}

.code-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(50px, 30px) scale(1.1); }
}

.overlay-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  padding-bottom: clamp(1rem, 2vw, 1.5rem);
  border-bottom: 2px solid rgba(102, 126, 234, 0.2);
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

.projects-intro {
  margin-bottom: clamp(2rem, 4vw, 3rem);
  text-align: center;
}

.intro-text {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 350px), 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  animation: fadeInGrid 0.6s ease-out 0.2s backwards;
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

@keyframes fadeInGrid {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .projects-page {
    padding: 1rem;
  }

  .overlay-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .overlay-close {
    align-self: flex-end;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .overlay-title svg {
    width: 24px;
    height: 24px;
  }

  .intro-text {
    font-size: 0.9375rem;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  .projects-page *,
  .animated-bg * {
    animation: none !important;
  }
}
</style>
