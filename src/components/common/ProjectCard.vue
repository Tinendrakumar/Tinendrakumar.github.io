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
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-placeholder {
  color: white;
  opacity: 0.8;
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
  color: #1E293B;
  margin: 0 0 0.25rem 0;
}

.project-role {
  font-size: 0.875rem;
  color: #3B82F6;
  font-weight: 500;
}

.project-description {
  color: #64748B;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
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
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
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
  color: #64748B;
  font-weight: 500;
}

.detail-value {
  font-size: 0.875rem;
  color: #1E293B;
  font-weight: 600;
}

.project-highlights {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
}

.project-highlights h4 {
  font-size: 0.875rem;
  color: #1E293B;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.project-highlights ul {
  margin: 0;
  padding-left: 1rem;
  color: #64748B;
}

.project-highlights li {
  font-size: 0.75rem;
  line-height: 1.4;
  margin-bottom: 0.25rem;
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
  background: rgba(59, 130, 246, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 600;
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