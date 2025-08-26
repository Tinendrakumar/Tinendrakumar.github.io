<template>
  <div class="overlay-page resume-page">
    <div class="overlay-content">
      <div class="overlay-header">
        <h1 class="overlay-title">Resume</h1>
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
          <h2>Experience</h2>
          <div class="timeline">
            <div v-for="job in experience" :key="job.period" class="timeline-item">
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
          <h2>Professional Skills</h2>
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
          <h2>Education & Certifications</h2>
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
        period: "May 2025 - August 2025",
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
        "AI Research",
        "Machine Learning",
        "Data Analysis",
        "Python",
        "TensorFlow & PyTorch",
        "Keras",
        "Scikit-learn",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Data Engineering",
        "Cloud Computing",
        "DevOps"
        
      ],
      tools: [
        "Jira & Confluence",
        "Microsoft Project",
        "Slack & Teams",
        "Google Analytics",
        "Tableau",
        "AWS & Azure",
        "Git & Version Control"
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
  color: white;
  padding: 2rem;
  max-width: 900px;
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

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
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

.resume-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.resume-content h2 {
  color: #60A5FA;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(96, 165, 250, 0.3);
  padding-bottom: 0.5rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 180px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(96, 165, 250, 0.3);
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 174px;
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #60A5FA;
}

.timeline-date {
  font-weight: 600;
  color: #60A5FA;
  font-size: 0.875rem;
}

.timeline-content h3 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.job-details {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.company {
  font-weight: 600;
  color: #CBD5E1;
}

.location {
  color: #94A3B8;
}

.timeline-content p {
  line-height: 1.6;
  color: #E2E8F0;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.skill-category h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.125rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: rgba(59, 130, 246, 0.2);
  color: #60A5FA;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(59, 130, 246, 0.3);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(59, 130, 246, 0.3);
  transform: translateY(-1px);
}

.education-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.education-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.2s ease;
}

.education-item:hover {
  transform: translateY(-2px);
}

.education-item h4 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.edu-institution {
  color: #60A5FA;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.edu-year {
  color: #94A3B8;
  font-size: 0.875rem;
  margin: 0;
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
  .resume-page {
    padding: 1rem;
  }

  .overlay-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .header-actions {
    flex-direction: column;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .timeline-item::before,
  .timeline-item::after {
    display: none;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .education-list {
    grid-template-columns: 1fr;
  }
}
</style>