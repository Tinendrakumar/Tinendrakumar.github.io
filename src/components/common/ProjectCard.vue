<template>
  <div class="project-card" @click="$emit('click')">
    <div class="project-image">
      <div class="project-placeholder">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
          <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2"/>
          <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
    </div>

    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">{{ project.title }}</h3>
        <span class="project-role">{{ project.role }}</span>
      </div>

      <p class="project-description">{{ project.description }}</p>

      <div class="project-meta">
        <div class="project-technologies">
          <span 
            v-for="tech in project.technologies" 
            :key="tech" 
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>

        <div class="project-details">
          <div class="project-detail">
            <span class="detail-label">Duration:</span>
            <span class="detail-value">{{ project.duration }}</span>
          </div>
          <div class="project-detail">
            <span class="detail-label">Team:</span>
            <span class="detail-value">{{ project.teamSize }}</span>
          </div>
        </div>
      </div>

      <div class="project-highlights" v-if="project.highlights">
        <h4>Key Achievements:</h4>
        <ul>
          <li v-for="highlight in project.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </div>

    <div class="project-overlay">
      <div class="overlay-content">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>View Project</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.project-card {
  position: relative;
  background: var(--color-background-elevated);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border-light);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: var(--shadow-md);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-400);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-image {
  height: 200px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-placeholder {
  color: white;
  opacity: 0.8;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.project-content {
  padding: 1.5rem;
}

.project-header {
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 0.25rem 0;
  transition: color 0.3s ease;
}

.project-role {
  font-size: 0.875rem;
  color: var(--color-primary-500);
  font-weight: 500;
}

.project-description {
  color: var(--color-text-primary);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  font-size: 0.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-meta {
  margin-bottom: 1rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(59, 130, 246, 0.15);
  color: var(--color-primary-600);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background: rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
}

:global(.dark) .tech-tag {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.project-details {
  display: flex;
  gap: 1rem;
}

.project-detail {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.detail-label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.detail-value {
  font-size: 0.875rem;
  color: var(--color-text-primary);
  font-weight: 600;
}

.project-highlights {
  border-top: 1px solid var(--color-border-light);
  padding-top: 1rem;
}

.project-highlights h4 {
  font-size: 0.9375rem;
  color: var(--color-text-primary);
  margin: 0 0 0.75rem 0;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.project-highlights ul {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--color-text-primary);
}

.project-highlights li {
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.project-highlights li:last-child {
  margin-bottom: 0;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(59, 130, 246, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(8px);
}

:global(.dark) .project-overlay {
  background: rgba(59, 130, 246, 0.9);
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.overlay-content svg {
  animation: bounce 1s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .project-content {
    padding: 1rem;
  }

  .project-details {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>