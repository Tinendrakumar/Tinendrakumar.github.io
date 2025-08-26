<template>
  <div class="overlay-page projects-page">
    <div class="overlay-content">
      <div class="overlay-header">
        <h1 class="overlay-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
            <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2"/>
            <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" stroke-width="2"/>
          </svg>
          Projects
        </h1>
        <button class="overlay-close" @click="$emit('close')" aria-label="Close overlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="projects-intro">
        <p>Here are some of the key projects I've led throughout my career. Each project represents a unique challenge and showcases different aspects of my project management expertise.</p>
      </div>

      <div class="projects-grid">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          :project="project"
          @click="openProject(project)"
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
        id: 1,
        title: "Digital Transformation Initiative",
        role: "Lead Project Manager",
        description: "Led a comprehensive digital transformation project for a Fortune 500 company, resulting in 40% improvement in operational efficiency and $2M cost savings.",
        technologies: ["Agile", "Scrum", "Digital Strategy"],
        duration: "18 months",
        teamSize: "25+ members",
        highlights: [
          "40% improvement in operational efficiency",
          "$2M cost savings achieved",
          "Successful migration of legacy systems",
          "Team of 25+ cross-functional members"
        ],
        url: "https://example.com/digital-transformation",
        image: "/images/project1.jpg"
      },
      {
        id: 2,
        title: "Mobile App Launch",
        role: "Senior Project Manager",
        description: "Managed end-to-end development and launch of a mobile application that achieved 100K+ downloads within the first 3 months and 4.8-star rating.",
        technologies: ["Mobile Development", "User Experience", "Market Research"],
        duration: "12 months",
        teamSize: "15 members",
        highlights: [
          "100K+ downloads in first 3 months",
          "4.8-star average rating",
          "Featured in App Store",
          "Award-winning UX design"
        ],
        url: "https://example.com/mobile-app-launch",
        image: "/images/project2.jpg"
      },
      {
        id: 3,
        title: "Cloud Migration Project",
        role: "Technical Project Manager",
        description: "Orchestrated migration of legacy systems to cloud infrastructure, ensuring zero downtime and 99.9% uptime post-migration with enhanced security protocols.",
        technologies: ["Cloud Architecture", "DevOps", "Security"],
        duration: "9 months",
        teamSize: "20 members",
        highlights: [
          "Zero downtime during migration",
          "99.9% uptime post-migration",
          "Enhanced security protocols",
          "50% reduction in infrastructure costs"
        ],
        url: "https://example.com/cloud-migration",
        image: "/images/project3.jpg"
      },
      {
        id: 4,
        title: "E-commerce Platform Redesign",
        role: "Project Manager",
        description: "Spearheaded complete redesign of e-commerce platform resulting in 60% increase in conversion rates and improved user experience metrics.",
        technologies: ["UX/UI Design", "E-commerce", "Analytics"],
        duration: "6 months",
        teamSize: "12 members",
        highlights: [
          "60% increase in conversion rates",
          "Improved user experience metrics",
          "Mobile-first responsive design",
          "Accessibility compliance achieved"
        ],
        url: "https://example.com/ecommerce-redesign",
        image: "/images/project4.jpg"
      }
    ])

    const openProject = (project) => {
      trackInteraction('project_click', 'project_card', { projectId: project.id, title: project.title })

      // In a real app, this would open the Firebase-stored URL
      if (project.url) {
        window.open(project.url, '_blank')
      } else {
        alert(`Opening ${project.title} project details...`)
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
  color: white;
  padding: 2rem;
  max-width: 1200px;
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

.projects-intro {
  margin-bottom: 2rem;
}

.projects-intro p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #E2E8F0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
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
  .projects-page {
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

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>