import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMainStore = defineStore('main', () => {
  // State
  const isLoading = ref(false)
  const user = ref(null)
  const contacts = ref([])
  const visitors = ref([])
  const projects = ref([])

  // Getters
  const isAuthenticated = computed(() => user.value !== null)
  const totalContacts = computed(() => contacts.value.length)
  const totalVisitors = computed(() => visitors.value.length)

  // Actions
  const setLoading = (loading) => {
    isLoading.value = loading
  }

  const setUser = (userData) => {
    user.value = userData
  }

  const addContact = (contact) => {
    contacts.value.unshift(contact)
  }

  const setContacts = (contactsList) => {
    contacts.value = contactsList
  }

  const addVisitor = (visitor) => {
    visitors.value.unshift(visitor)
  }

  const setVisitors = (visitorsList) => {
    visitors.value = visitorsList
  }

  const setProjects = (projectsList) => {
    projects.value = projectsList
  }

  return {
    isLoading,
    user,
    contacts,
    visitors,
    projects,
    isAuthenticated,
    totalContacts,
    totalVisitors,
    setLoading,
    setUser,
    addContact,
    setContacts,
    addVisitor,
    setVisitors,
    setProjects
  }
})