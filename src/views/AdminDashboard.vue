<template>
  <div class="admin-dashboard">
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div class="header-actions">
          <BaseButton variant="outline" @click="logout">Logout</BaseButton>
        </div>
      </header>

      <div v-if="isLoading" class="loading-state">Loading data...</div>
      <div v-else-if="error" class="error-state">{{ error }}</div>
      <template v-else>
        <div class="dashboard-stats">
          <div class="stat-card">
            <div class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2"/></svg>
            </div>
            <div class="stat-content">
              <h3>Total Visitors</h3>
              <p class="stat-number">{{ totalVisitors }}</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/></svg>
            </div>
            <div class="stat-content">
              <h3>Contact Submissions</h3>
              <p class="stat-number">{{ totalContacts }}</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2"/></svg>
            </div>
            <div class="stat-content">
              <h3>Total Page Views</h3>
              <p class="stat-number">{{ totalPageViews }}</p>
            </div>
          </div>
        </div>

        <div class="dashboard-content">
          <div class="dashboard-section">
            <h2>Recent Contact Submissions</h2>
            <div class="contacts-list" v-if="contacts.length > 0">
              <div v-for="contact in contacts.slice(0, 5)" :key="contact.id" class="contact-item">
                <div class="contact-header">
                  <h4>{{ contact.firstName }} {{ contact.lastName }}</h4>
                  <span class="contact-date">{{ formatDate(contact.timestamp) }}</span>
                </div>
                <p class="contact-email">{{ contact.email }}</p>
                <p class="contact-subject"><strong>Subject:</strong> {{ contact.subject }}</p>
                <p class="contact-message">{{ contact.message }}</p>
              </div>
            </div>
            <div v-else class="empty-state">
              <p>No contact submissions yet.</p>
            </div>
          </div>

          <div class="dashboard-section">
            <h2>Recent Visitors</h2>
            <div class="visitors-list" v-if="visitors.length > 0">
              <div v-for="visitor in visitors.slice(0, 10)" :key="visitor.id" class="visitor-item">
                <div class="visitor-info">
                  <div class="visitor-location">
                    <strong>{{ visitor.city || 'Unknown' }}, {{ visitor.country || 'Unknown' }}</strong>
                  </div>
                  <div class="visitor-details">
                    <span>{{ visitor.ip }}</span> -  
                    <span>{{ visitor.platform }}</span> -  
                    <span>{{ formatDate(visitor.timestamp) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="empty-state">
              <p>No visitor data yet.</p>
            </div>
          </div>

          <div class="dashboard-section">
            <h2>Recent Page Views</h2>
            <div class="page-views-list" v-if="pageViews.length > 0">
              <div v-for="view in pageViews.slice(0, 10)" :key="view.id" class="page-view-item">
                <div class="page-view-info">
                  <strong>{{ view.page || 'Unknown Page' }}</strong>
                  <span v-if="view.ip"> — IP: {{ view.ip }}</span>
                  <span v-if="view.url"> — {{ view.url }}</span>
                  <span> — {{ view.viewCount || 1 }} view(s)</span>
                  <span class="page-view-date"> — {{ formatDate(view.timestamp) }}</span>
                </div>
              </div>
            </div>
            <div v-else class="empty-state">
              <p>No page view data yet.</p>
            </div>
          </div>
        </div>
      </template>
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

    const totalVisitors = computed(() => visitors.value.length)
    const totalContacts = computed(() => contacts.value.length)
    const totalPageViews = computed(() => {
      // Aggregate: Assumes each page_view doc has a 'viewCount' field; adjust if each doc = 1 view
      return pageViews.value.reduce((sum, view) => sum + (view.viewCount || 1), 0)
    })

    const loadData = async () => {
      isLoading.value = true
      try {
        const [contactsData, visitorsData, pageViewsData] = await Promise.all([
          getContactSubmissions(),
          getVisitorAnalytics(),
          getPageViews()
        ])
        contacts.value = contactsData
        visitors.value = visitorsData
        pageViews.value = pageViewsData
        error.value = null
      } catch (err) {
        error.value = 'Failed to load data: ' + err.message
      } finally {
        isLoading.value = false
      }
    }

    const formatDate = (timestamp) => {
      if (!timestamp || !timestamp.toDate) return 'Just now'
      return timestamp.toDate().toLocaleString()
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
      isLoading,
      error,
      formatDate,
      logout
    }
  }
}
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background: #111827;
  padding: 2rem;
  color: #e5e7eb;
  font-family: 'Inter', sans-serif;
  top: 50px;
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #374151;
}
.dashboard-header h1 {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}
.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.stat-card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 0.75rem;
  color: #60a5fa;
}
.stat-content h3 {
  margin: 0 0 0.25rem 0;
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 500;
}
.stat-number {
  margin: 0;
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
}
.dashboard-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.dashboard-section {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
.dashboard-section h2 {
  color: white;
  margin: 0 0 1.5rem 0;
  font-size: 1.25rem;
  border-bottom: 1px solid #374151;
  padding-bottom: 1rem;
}
.contact-item, .visitor-item, .page-view-item {
  padding: 1rem 0;
  border-bottom: 1px solid #374151;
}
.contact-item:last-child, .visitor-item:last-child, .page-view-item:last-child {
  border-bottom: none;
}
.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.contact-header h4 {
  margin: 0;
  color: #e5e7eb;
}
.contact-date, .page-view-date {
  color: #9ca3af;
  font-size: 0.875rem;
}
.contact-email {
  color: #60a5fa;
  font-size: 0.875rem;
  margin: 0.25rem 0;
}
.contact-subject, .contact-message {
  color: #d1d5db;
  margin: 0.5rem 0;
  font-size: 0.875rem;
}
.contact-message {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.visitor-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.visitor-location {
  color: #e5e7eb;
}
.visitor-details {
  color: #9ca3af;
  font-size: 0.875rem;
}
.page-view-info {
  color: #d1d5db;
  font-size: 0.875rem;
}
.empty-state {
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 2rem 0;
}
.loading-state, .error-state {
  text-align: center;
  padding: 2rem;
  color: #9ca3af;
}
.error-state {
  color: #ef4444;
}
@media (max-width: 992px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .admin-dashboard { padding: 1rem; }
  .dashboard-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
