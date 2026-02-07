<template>
  <div class="overlay-page resume-page">

    <div class="overlay-content">
      <div class="overlay-header">
        <h1 class="overlay-title">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2"/>
            <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/>
          </svg>
          Resume
        </h1>
        <div class="header-actions">
          <BaseButton 
            variant="primary" 
            @click="downloadResume"
            :loading="downloading"
          >
            Download CV
          </BaseButton>
          <button class="overlay-close" @click="$emit('close')" aria-label="Close overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="resume-content">
        <section class="experience-section">
          <h2>💼 Experience</h2>
          <div class="timeline">
            <div v-for="(job, index) in experience" :key="job.period" class="timeline-item" :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="timeline-date">{{ job.period }}</div>
              <div class="timeline-content">
                <h3>{{ job.position }}</h3>
                <div class="job-details">
                  <span class="company">{{ job.company }}</span>
                  <span class="location">{{ job.location }}</span>
                </div>
                <p>{{ job.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="skills-section">
          <h2>⚡ Professional Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Core Competencies</h3>
              <div class="skills-list">
                <span v-for="skill in skills.professional" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
            </div>

            <div class="skill-category">
              <h3>Tools & Technologies</h3>
              <div class="skills-list">
                <span v-for="tool in skills.tools" :key="tool" class="skill-tag">
                  {{ tool }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section class="education-section">
          <h2>🎓 Education & Certifications</h2>
          <div class="education-list">
            <div v-for="edu in education" :key="edu.title" class="education-item">
              <h4>{{ edu.title }}</h4>
              <p class="edu-institution">{{ edu.institution }}</p>
              <p class="edu-year">{{ edu.year }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useFirebase } from '@/composables/useFirebase'
import { useVisitorTracking } from '@/composables/useVisitorTracking'

export default {
  name: 'Resume',
  components: {
    BaseButton
  },
  emits: ['close'],
  setup() {
    const { downloadResume: downloadResumeFile } = useFirebase()
    const { trackPageView, trackInteraction } = useVisitorTracking()

    const downloading = ref(false)

    const experience = [
      {
        period: "Aug 2025 - Present",
        position: "MLDOPS III",
        company: "Amazon",
        location: "Boston, MA",
        description: "Create and annotate high-quality, complex multimodal training data (text, image, video); Collaborate with scientists and engineers to refine guidelines and tooling; research and synthesize technical topics; and identify/report tooling bugs and suggest improvements to improve LLM training data quality."
      },
      {
        period: "May 2025 - Aug 2025",
        position: "AI Research Assistant",
        company: "Harvard Medical School - Brigham and Women's Hospital",
        location: "Cambridge, MA",
        description: "Conducted IVF-related research applying deep learning models for sperm classification and investigating bias in embryo grading; developed and evaluated ensemble methods to improve classification robustness and mitigate bias."
      },
      {
        period: "June 2024 - April 2025",
        position: "Machine Learning Engineer Consultant",
        company: "HighQuartile Consultancy Inc",
        location: "Remote",
        description: "Developed and deployed machine learning models for various clients, focusing on predictive analytics and data-driven decision-making. Collaborated with cross-functional teams to integrate ML solutions into existing systems."
      },
      {
        period: "June 2023 - May 2024",
        position: "AI Research Intern",
        company: "Harvard Medical School - Brigham and Women's Hospital",
        location: "Cambridge, MA",
        description: "Conducted research on AI applications in healthcare, focusing on improving diagnostic accuracy and patient outcomes. Assisted in developing machine learning models and analyzing clinical data."
      }
    ]

    const skills = {
      professional: [
        "AI Research", "Machine Learning", "Data Analysis", "Python",
        "TensorFlow & PyTorch", "Keras", "Scikit-learn", "Deep Learning",
        "NLP", "Computer Vision", "Data Engineering", "Cloud Computing", "DevOps"
      ],
      tools: [
        "Jira & Confluence", "Microsoft Project", "Slack & Teams",
        "Google Analytics", "Tableau", "AWS & Azure", "Git & Version Control"
      ]
    }

    const education = [
      {
        title: "Master of Science in Computer Science",
        institution: "University of Massachusetts Lowell",
        year: "2024"
      },
      {
        title: "Master of Technology (M.Tech) in Communication Systems",
        institution: "SASTRA University, Thanjavur",
        year: "2022"
      },
      {
        title: "Bachelor of Technology (B.Tech) in Electronics and Communication Engineering",
        institution: "SASTRA University, Thanjavur",
        year: "2021"
      }
    ]

    const downloadResume = async () => {
      downloading.value = true
      trackInteraction('resume_download', 'button')

      const result = await downloadResumeFile()
      if (!result.success) {
        alert('Resume download failed. Please try again.')
      }

      downloading.value = false
    }

    onMounted(() => {
      trackPageView('resume')
    })

    return {
      experience,
      skills,
      education,
      downloading,
      downloadResume
    }
  }
}
</script>

<style scoped>
.resume-page {
  position: relative;
  padding: clamp(1rem, 3vw, 2rem);
  max-width: 1000px;
  margin: 0 auto;
  animation: slideInUp 0.5s ease-out;
  min-height: 100%;
  background: transparent;
}

/* Premium CS-Themed Background */
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
  left: 10%;
  width: 500px;
  height: 500px;
  background: var(--gradient-primary);
  animation-duration: 25s;
}

.blob-2 {
  bottom: 10%;
  right: 10%;
  width: 600px;
  height: 600px;
  background: var(--gradient-accent);
  animation-duration: 30s;
  animation-delay: -10s;
}

/* Binary Rain Effect */
.binary-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.08;
  font-family: 'Courier New', monospace;
}

:global(.dark) .binary-rain {
  opacity: 0.15;
}

.binary-column {
  position: absolute;
  top: -100%;
  font-size: 14px;
  color: var(--color-primary-500);
  animation: binary-fall 15s linear infinite;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@keyframes binary-fall {
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

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
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

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
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
}

.overlay-close:hover {
  background: var(--color-background-accent);
  transform: rotate(90deg) scale(1.1);
}

.resume-content {
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 3rem);
}

.resume-content h2 {
  color: var(--color-primary-600);
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--color-border-light);
  padding-bottom: 0.5rem;
  display: inline-block;
  font-weight: 700;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: clamp(150px, 20vw, 200px) 1fr;
  gap: 2rem;
  position: relative;
  animation: slideInLeft 0.5s ease-out backwards;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: clamp(130px, 18vw, 180px);
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border-medium);
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: clamp(124px, calc(18vw - 6px), 174px);
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-primary-500);
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
}

.timeline-date {
  font-weight: 700;
  color: var(--color-primary-600);
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
}

.timeline-content h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-size: clamp(1rem, 2vw, 1.125rem);
}

.job-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
}

.company {
  font-weight: 600;
  color: var(--color-text-secondary);
}

.location {
  color: var(--color-text-muted);
}

.timeline-content p {
  line-height: 1.7;
  color: var(--color-text-secondary);
  font-size: clamp(0.875rem, 1.6vw, 0.9375rem);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

.skill-category h3 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: clamp(1rem, 2vw, 1.125rem);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  color: var(--color-primary-600);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
  font-weight: 600;
  border: 1px solid var(--color-border-light);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-tag:hover {
  background: var(--color-background-accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-400);
}

.education-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1.5rem;
}

.education-item {
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.education-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-300);
}

.education-item h4 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-size: clamp(0.9375rem, 1.8vw, 1rem);
  line-height: 1.4;
}

.edu-institution {
  color: var(--color-primary-500);
  font-weight: 500;
  margin-bottom: 0.25rem;
  font-size: clamp(0.875rem, 1.6vw, 0.9375rem);
}

.edu-year {
  color: var(--color-text-muted);
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
  margin: 0;
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (max-width: 768px) {
  .resume-page {
    padding: 1rem;
  }

  .overlay-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
    justify-content: space-between;
  }

  .overlay-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .timeline-item::before,
  .timeline-item::after {
    display: none;
  }

  .job-details {
    flex-direction: column;
    gap: 0.25rem;
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