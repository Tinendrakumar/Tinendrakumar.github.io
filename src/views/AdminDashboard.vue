<template>
  <div class="admin-dashboard">
    <div class="dashboard-container">
      <header class="dashboard-header">
        <div class="header-content">
          <h1>Admin Dashboard</h1>
          <p class="header-subtitle">Monitor your portfolio analytics and visitor insights</p>
        </div>
        <div class="header-actions">
          <BaseButton variant="outline" @click="loadData" :disabled="isLoading">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4v6h6M23 20v-6h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Refresh
          </BaseButton>
          <BaseButton variant="outline" @click="logout">Logout</BaseButton>
        </div>
      </header>

      <div v-if="isLoading" class="loading-state">
        <div class="loading-spinner">
          <div class="spinner"></div>
          <p>Loading analytics data...</p>
        </div>
      </div>
      
      <div v-else-if="error" class="error-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <p>{{ error }}</p>
        <BaseButton @click="loadData">Try Again</BaseButton>
      </div>
      
      <template v-else>
        <div class="dashboard-stats">
          <div 
            class="stat-card" 
            v-for="(stat, index) in stats" 
            :key="index" 
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="scrollToSection(stat.sectionId)"
            role="button"
            tabindex="0"
          >
            <div class="stat-icon" :style="{ background: stat.color }">
              <component :is="stat.icon" />
            </div>
            <div class="stat-content">
              <h3>{{ stat.label }}</h3>
              <p class="stat-number">{{ stat.value }}</p>
              <span class="stat-trend" :class="stat.trend">{{ stat.change }}</span>
            </div>
          </div>
        </div>

        <div class="dashboard-content">
          <div class="dashboard-section contacts-section" id="contacts-section">
            <div class="section-header">
              <div class="header-left">
                <h2>Recent Contact Submissions</h2>
                <span class="badge">{{ contacts.length }} total</span>
              </div>
              <div class="header-right">
                <select v-model="sortBy" class="sort-select">
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
            <div class="contacts-list" v-if="sortedContacts.length > 0">
              <div 
                v-for="(contact, index) in sortedContacts" 
                :key="contact.id" 
                class="contact-item clickable" 
                :style="{ animationDelay: `${index * 0.05}s` }"
                @click="openContactDetails(contact)"
              >
                <div class="contact-header">
                  <div class="contact-avatar">
                    {{ contact.firstName.charAt(0) }}{{ contact.lastName.charAt(0) }}
                  </div>
                  <div class="contact-info">
                    <h4>{{ contact.firstName }} {{ contact.lastName }}</h4>
                    <p class="contact-email">{{ contact.email }}</p>
                  </div>
                  <span class="contact-date">{{ formatDate(contact.timestamp) }}</span>
                </div>
                <p class="contact-subject"><strong>Subject:</strong> {{ contact.subject }}</p>
                <p class="contact-message">{{ contact.message }}</p>
              </div>
            </div>
            <div v-else class="empty-state">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
              </svg>
              <p>No contact submissions yet.</p>
            </div>
          </div>

          <div class="dashboard-sidebar">
            <div class="dashboard-section visitors-section" id="visitors-section">
              <div class="section-header">
                <h2>Recent Visitors</h2>
                <span class="badge">{{ visitors.length }} total</span>
              </div>
              <div class="visitors-list" v-if="visitors.length > 0">
                <div v-for="(visitor, index) in visitors.slice(0, 10)" :key="visitor.id" class="visitor-item" :style="{ animationDelay: `${index * 0.05}s` }">
                  <div class="visitor-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="visitor-info">
                    <div class="visitor-location">
                      <strong>{{ visitor.city || 'Unknown' }}, {{ visitor.country || 'Unknown' }}</strong>
                    </div>
                    <div class="visitor-details">
                      <span>{{ visitor.ip }}</span>
                      <span>{{ formatDate(visitor.timestamp) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                </svg>
                <p>No visitor data yet.</p>
              </div>
            </div>

            <div class="dashboard-section page-views-section" id="page-views-section">
              <div class="section-header">
                <h2>Page Views</h2>
                <span class="badge">{{ totalPageViews }} views</span>
              </div>
              <div class="page-views-list" v-if="pageViews.length > 0">
                <div v-for="(view, index) in pageViews.slice(0, 10)" :key="view.id" class="page-view-item" :style="{ animationDelay: `${index * 0.05}s` }">
                  <div class="page-view-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="page-view-info">
                    <strong>{{ view.page || 'Unknown Page' }}</strong>
                    <div class="page-view-meta">
                      <span class="ip-address">{{ view.ip || 'Unknown IP' }}</span>
                      <span class="separator">•</span>
                      <span>{{ formatDate(view.timestamp) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2"/>
                </svg>
                <p>No page view data yet.</p>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Contact Details Modal -->
      <div v-if="selectedContact" class="modal-backdrop" @click="closeContactDetails">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3>Contact Details</h3>
            <button class="close-button" @click="closeContactDetails">&times;</button>
          </div>
          <div class="modal-body">
            <div class="detail-group">
              <label>From</label>
              <p>{{ selectedContact.firstName }} {{ selectedContact.lastName }}</p>
            </div>
            <div class="detail-group">
              <label>Email</label>
              <p><a :href="'mailto:' + selectedContact.email">{{ selectedContact.email }}</a></p>
            </div>
            <div class="detail-group">
              <label>Date</label>
              <p>{{ formatDate(selectedContact.timestamp) }}</p>
            </div>
            <div class="detail-group">
              <label>Subject</label>
              <p>{{ selectedContact.subject }}</p>
            </div>
            <div class="detail-group full-width">
              <label>Message</label>
              <div class="message-content">{{ selectedContact.message }}</div>
            </div>
          </div>
          <div class="modal-footer">
            <BaseButton @click="closeContactDetails">Close</BaseButton>
            <BaseButton variant="primary" @click="replyToContact(selectedContact)">Reply via Email</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useAuth } from '@/composables/useAuth'
import { useFirebase } from '@/composables/useFirebase'

export default {
  name: 'AdminDashboard',
  components: {
    BaseButton
  },
  setup() {
    const router = useRouter()
    const { logout: authLogout } = useAuth()
    const { getContactSubmissions, getVisitorAnalytics, getPageViews } = useFirebase()

    const contacts = ref([])
    const visitors = ref([])
    const pageViews = ref([])
    const isLoading = ref(true)
    const error = ref(null)
    const sortBy = ref('newest')
    const selectedContact = ref(null)

    const totalVisitors = computed(() => visitors.value.length)
    const totalContacts = computed(() => contacts.value.length)
    const totalPageViews = computed(() => {
      return pageViews.value.reduce((sum, view) => sum + (view.viewCount || 1), 0)
    })

    const sortedContacts = computed(() => {
      return [...contacts.value].sort((a, b) => {
        const dateA = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(0)
        const dateB = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(0)
        return sortBy.value === 'newest' ? dateB - dateA : dateA - dateB
      })
    })

    const stats = computed(() => [
      {
        label: 'Total Visitors',
        value: totalVisitors.value,
        change: '+12% this week',
        trend: 'up',
        color: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        icon: 'svg',
        sectionId: 'visitors-section'
      },
      {
        label: 'Contact Submissions',
        value: totalContacts.value,
        change: '+5 new',
        trend: 'up',
        color: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        icon: 'svg',
        sectionId: 'contacts-section'
      },
      {
        label: 'Total Page Views',
        value: totalPageViews.value,
        change: '+23% this month',
        trend: 'up',
        color: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
        icon: 'svg',
        sectionId: 'page-views-section'
      }
    ])

    const loadData = async () => {
      isLoading.value = true
      error.value = null
      try {
        const [contactsData, visitorsData, pageViewsData] = await Promise.all([
          getContactSubmissions(),
          getVisitorAnalytics(),
          getPageViews()
        ])
        contacts.value = contactsData
        visitors.value = visitorsData
        pageViews.value = pageViewsData
      } catch (err) {
        error.value = 'Failed to load data: ' + err.message
      } finally {
        isLoading.value = false
      }
    }

    const formatDate = (timestamp) => {
      if (!timestamp || !timestamp.toDate) return 'Just now'
      const date = timestamp.toDate()
      const now = new Date()
      const diff = now - date
      const minutes = Math.floor(diff / 60000)
      const hours = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)
      
      if (minutes < 1) return 'Just now'
      if (minutes < 60) return `${minutes}m ago`
      if (hours < 24) return `${hours}h ago`
      if (days < 7) return `${days}d ago`
      return date.toLocaleDateString()
    }

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const openContactDetails = (contact) => {
      selectedContact.value = contact
    }

    const closeContactDetails = () => {
      selectedContact.value = null
    }

    const replyToContact = (contact) => {
      window.location.href = `mailto:${contact.email}?subject=Re: ${contact.subject}`
    }

    const logout = () => {
      authLogout()
      router.push('/')
    }

    onMounted(loadData)

    return {
      contacts,
      visitors,
      pageViews,
      totalVisitors,
      totalContacts,
      totalPageViews,
      stats,
      isLoading,
      error,
      sortBy,
      sortedContacts,
      selectedContact,
      formatDate,
      loadData,
      logout,
      scrollToSection,
      openContactDetails,
      closeContactDetails,
      replyToContact
    }
  }
}
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background: var(--color-background-secondary);
  padding: 2rem;
  color: var(--color-text-primary);
  font-family: 'Inter', sans-serif;
  padding-top: 5rem;
}

.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: var(--color-background-elevated);
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
}

.header-content h1 {
  color: var(--color-text-primary);
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-subtitle {
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 0.875rem;
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-card {
  background: var(--color-background-elevated);
  border: 1px solid var(--color-border-light);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  animation: slideInUp 0.5s ease-out backwards;
  cursor: pointer;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-400);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 1rem;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-content h3 {
  margin: 0 0 0.5rem 0;
  color: var(--color-text-primary);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
}

.stat-number {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
}

.stat-trend {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--color-success);
  font-weight: 500;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
}

.dashboard-section {
  background: var(--color-background-elevated);
  border: 1px solid var(--color-border-light);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border-light);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-header h2 {
  color: var(--color-text-primary);
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.badge {
  background: var(--gradient-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.sort-select {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-light);
  background: var(--color-background-primary);
  color: var(--color-text-primary);
  font-size: 0.875rem;
  cursor: pointer;
}

.dashboard-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contacts-list,
.visitors-list,
.page-views-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item,
.visitor-item,
.page-view-item {
  padding: 1rem;
  border: 1px solid var(--color-border-light);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  animation: slideInUp 0.4s ease-out backwards;
  background: var(--color-background-primary);
}

.contact-item.clickable {
  cursor: pointer;
}

.contact-item:hover,
.visitor-item:hover,
.page-view-item:hover {
  border-color: var(--color-primary-400);
  box-shadow: var(--shadow-sm);
  transform: translateX(4px);
}

.contact-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.contact-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
  min-width: 0;
}

.contact-info h4 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 0.9375rem;
  font-weight: 600;
}

.contact-email {
  color: var(--color-primary-500);
  font-size: 0.8125rem;
  margin: 0.125rem 0 0 0;
}

.contact-date {
  color: var(--color-text-muted);
  font-size: 0.75rem;
  white-space: nowrap;
}

.contact-subject,
.contact-message {
  color: var(--color-text-secondary);
  margin: 0.5rem 0;
  font-size: 0.875rem;
  line-height: 1.5;
}

.contact-message {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.visitor-item,
.page-view-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.visitor-icon,
.page-view-icon {
  width: 32px;
  height: 32px;
  border-radius: 0.5rem;
  background: var(--color-background-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-500);
  flex-shrink: 0;
}

.visitor-info,
.page-view-info {
  flex: 1;
  min-width: 0;
}

.visitor-location strong,
.page-view-info strong {
  color: var(--color-text-primary);
  font-size: 0.875rem;
  display: block;
  margin-bottom: 0.25rem;
}

.visitor-details,
.page-view-meta {
  color: var(--color-text-muted);
  font-size: 0.75rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.ip-address {
  font-family: monospace;
  background: var(--color-background-accent);
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
}

.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
  color: var(--color-text-muted);
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-border-light);
  border-top-color: var(--color-primary-500);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-state svg {
  color: var(--color-error);
  margin-bottom: 1rem;
}

.empty-state svg {
  color: var(--color-text-muted);
  opacity: 0.5;
  margin-bottom: 1rem;
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: var(--color-background-elevated);
  border-radius: 1rem;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--color-border-light);
  animation: slideInUp 0.3s ease-out;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--color-text-primary);
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  transition: color 0.2s;
}

.close-button:hover {
  color: var(--color-text-primary);
}

.modal-body {
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.detail-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-group.full-width {
  grid-column: 1 / -1;
}

.detail-group label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-group p {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 1rem;
}

.detail-group a {
  color: var(--color-primary-500);
  text-decoration: none;
}

.message-content {
  background: var(--color-background-secondary);
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--color-text-primary);
  line-height: 1.6;
  white-space: pre-wrap;
  border: 1px solid var(--color-border-light);
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--color-border-light);
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

@media (max-width: 1024px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .admin-dashboard {
    padding: 1rem;
    padding-top: 4rem;
  }
  
  .dashboard-header {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
  
  .header-actions {
    width: 100%;
    flex-direction: column;
  }
  
  .dashboard-stats {
    grid-template-columns: 1fr;
  }
  
  .modal-body {
    grid-template-columns: 1fr;
  }
}
</style>
