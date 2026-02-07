<template>
  <main class="homepage">

    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="greeting-pill">
            <span class="wave">👋</span>
            <span>Hello, I'm</span>
          </div>
          
          <h1 class="hero-title">
            Tinendra
            <span class="text-gradient">Kandula</span>
          </h1>
          
          <div class="typing-container">
            <span class="typing-text">Machine Learning Engineer</span>
          </div>

          <div class="specialization-tags">
            <span class="spec-tag">Generative AI</span>
            <span class="spec-tag">Multi-modal Learning</span>
            <span class="spec-tag">NLP</span>
          </div>

          <p class="hero-description">
            Building intelligent systems that solve real-world problems with scalable cloud solutions.
            Passionate about pushing the boundaries of AI and machine learning.
          </p>

          <div class="hero-buttons">
            <BaseButton
              variant="primary"
              size="large"
              class="glow-button"
              @click="$emit('show-overlay', 'Projects')"
            >
              View Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </BaseButton>
            
            <BaseButton
              variant="outline"
              size="large"
              @click="$emit('show-overlay', 'Resume')"
            >
              Resume
            </BaseButton>
          </div>

          <div class="social-links">
            <a href="https://github.com/Tinendrakumar" target="_blank" class="social-icon" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/tinendra-kumar/" target="_blank" class="social-icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:tinendra.kandula@gmail.com" class="social-icon" aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="profile-card">
            <div class="profile-image-container">
              <img
                src="@/assets/images/1.jpg"
                alt="Tinendra Kandula"
                class="profile-img"
              />
              <div class="profile-glow"></div>
              <div class="profile-ring"></div>
            </div>
            <div class="tech-stack-orbit">
              <div class="orbit-item item-1">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              </div>
              <div class="orbit-item item-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
              </div>
              <div class="orbit-item item-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
              </div>
              <div class="orbit-item item-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator" @click="scrollToContent">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  </main>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';
import { useVisitorTracking } from '@/composables/useVisitorTracking';
import { onMounted } from 'vue';

export default {
  name: 'Home',
  components: {
    BaseButton,
  },
  emits: ['show-overlay'],
  setup() {
    const { trackPageView } = useVisitorTracking();
    
    const getParticleStyle = (index) => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomDuration = 10 + Math.random() * 20;
      const randomDelay = Math.random() * 5;
      const randomSize = 2 + Math.random() * 3;
      
      return {
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        animationDuration: `${randomDuration}s`,
        animationDelay: `${randomDelay}s`
      };
    };
    
    const scrollToContent = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    };

    onMounted(() => {
      trackPageView('home');
    });

    return {
      getParticleStyle,
      scrollToContent
    };
  },
};
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2rem);
  background: transparent;
  color: var(--color-text-primary);
}

/* Hero Section */
.hero {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(3rem, 6vw, 6rem);
  align-items: center;
  min-height: 85vh;
}

/* Hero Content */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.75rem);
}

.greeting-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  border-radius: 9999px;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 600;
  color: var(--color-text-secondary);
  width: fit-content;
  box-shadow: var(--shadow-lg);
  animation: slideDown 0.6s ease-out;
}

.wave {
  display: inline-block;
  font-size: 1.5rem;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.hero-title {
  font-size: clamp(2.25rem, 5.5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin: 0;
  letter-spacing: -0.02em;
  animation: slideRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards;
}

.text-gradient {
  background: var(--gradient-cosmic);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
}

.text-gradient::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: clamp(4px, 0.5vw, 6px);
  background: var(--gradient-cosmic);
  border-radius: 3px;
  opacity: 0.3;
}

.typing-container {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 600;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: -0.5rem;
  animation: slideRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
}

.typing-text::after {
  content: '|';
  -webkit-text-fill-color: currentColor;
  color: var(--color-primary-500);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.specialization-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: -0.5rem;
  animation: slideRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
}

.spec-tag {
  padding: 0.5rem 1.25rem;
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  border-radius: 9999px;
  font-size: clamp(0.8125rem, 1.5vw, 0.9375rem);
  font-weight: 600;
  color: var(--color-text-primary);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.spec-tag:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-300);
}

.hero-description {
  font-size: clamp(0.9375rem, 1.8vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 580px;
  margin: 0;
  animation: slideRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s backwards;
}

.glow-button {
  position: relative;
  overflow: hidden;
}

.glow-button::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--gradient-primary);
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.glow-button:hover::before {
  opacity: 0.5;
  animation: glow-pulse 2s infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s backwards;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--color-text-muted);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: var(--shadow-sm);
}

.social-icon:hover {
  color: var(--color-primary-500);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-300);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1.2s ease-out 0.4s backwards;
}

.profile-card {
  position: relative;
  width: clamp(280px, 35vw, 450px);
  height: clamp(280px, 35vw, 450px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image-container {
  position: relative;
  width: clamp(200px, 26vw, 340px);
  height: clamp(200px, 26vw, 340px);
  border-radius: 50%;
  z-index: 2;
  padding: clamp(8px, 1vw, 12px);
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border: 2px solid var(--glass-border);
  box-shadow: var(--shadow-2xl);
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: clamp(3px, 0.5vw, 5px) solid transparent;
  background: var(--gradient-cosmic) border-box;
}

.profile-glow {
  position: absolute;
  inset: clamp(-20px, -3vw, -40px);
  background: var(--gradient-cosmic);
  filter: blur(clamp(30px, 5vw, 60px));
  opacity: 0.4;
  z-index: -1;
  border-radius: 50%;
  animation: pulse-glow 4s infinite ease-in-out;
}

@keyframes pulse-glow {
  0%, 100% { 
    opacity: 0.4; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.6; 
    transform: scale(1.1);
  }
}

.profile-ring {
  position: absolute;
  inset: clamp(-10px, -2vw, -20px);
  border: 2px solid transparent;
  border-radius: 50%;
  background: var(--gradient-cosmic) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.3;
  animation: ring-spin 10s linear infinite;
}

@keyframes ring-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.tech-stack-orbit {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: orbit-spin 30s linear infinite;
}

.orbit-item {
  position: absolute;
  width: clamp(48px, 6vw, 64px);
  height: clamp(48px, 6vw, 64px);
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border: 2px solid var(--glass-border);
  border-radius: clamp(12px, 2vw, 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
  padding: clamp(8px, 1.2vw, 12px);
  animation: orbit-spin-reverse 30s linear infinite;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.orbit-item:hover {
  transform: scale(1.15);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-primary-300);
  z-index: 10;
}

.orbit-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.item-1 { top: -5%; left: 50%; transform: translate(-50%, -50%); }
.item-2 { top: 50%; right: -5%; transform: translate(50%, -50%); }
.item-3 { bottom: -5%; left: 50%; transform: translate(-50%, 50%); }
.item-4 { top: 50%; left: -5%; transform: translate(-50%, -50%); }

@keyframes orbit-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes orbit-spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.6;
  animation: fadeIn 1.2s ease-out 1.5s backwards;
  transition: opacity 0.3s;
}

.scroll-indicator:hover {
  opacity: 1;
  cursor: pointer;
}

.mouse {
  width: 28px;
  height: 44px;
  border: 2px solid var(--color-text-secondary);
  border-radius: 20px;
  position: relative;
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
}

.wheel {
  width: 4px;
  height: 10px;
  background: var(--color-text-secondary);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 1.5s infinite;
}

@keyframes scroll-wheel {
  0% { transform: translateX(-50%) translateY(0); opacity: 1; }
  100% { transform: translateX(-50%) translateY(14px); opacity: 0; }
}

.scroll-indicator span {
  font-size: clamp(0.75rem, 1.2vw, 0.8125rem);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

/* Animations */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-25px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-content {
    align-items: center;
  }

  .greeting-pill,
  .specialization-tags,
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .homepage {
    padding: 1rem;
  }

  .hero-container {
    min-height: auto;
    gap: 2rem;
    padding-top: 2rem;
  }

  .hero-content {
    gap: 1.25rem;
  }

  .text-gradient::after {
    display: none;
  }

  .typing-container {
    margin-top: -0.25rem;
  }

  .specialization-tags {
    margin-top: 0;
  }

  .scroll-indicator {
    bottom: 1rem;
  }

  .scroll-indicator span {
    display: none;
  }
}

@media (max-width: 480px) {
  .greeting-pill {
    padding: 0.625rem 1.25rem;
  }

  .specialization-tags {
    gap: 0.5rem;
  }

  .spec-tag {
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
  }

  .hero-buttons {
    width: 100%;
    flex-direction: column;
  }

  .hero-buttons > * {
    width: 100%;
  }

  .orbit-item {
    width:40px;
    height: 40px;
    padding: 6px;
  }

  .item-1 { top: -3%; }
  .item-2 { right: -3%; }
  .item-3 { bottom: -3%; }
  .item-4 { left: -3%; }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .blob,
  .particle,
  .gradient-mesh,
  .tech-stack-orbit,
  .orbit-item,
  .profile-ring {
    animation: none !important;
  }
}
</style>
