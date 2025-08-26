import { ref } from 'vue'
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp,
  limit
} from 'firebase/firestore'
import { 
  ref as storageRef, 
  getDownloadURL 
} from 'firebase/storage'
import { db, storage } from '@/utils/firebase'

export function useFirebase() {
  const loading = ref(false)
  const error = ref(null)

  // Contact form submission
  const submitContact = async (formData) => {
    loading.value = true
    error.value = null

    try {
      const visitorInfo = await getVisitorInfo()

      await addDoc(collection(db, 'contact_submissions'), {
        ...formData,
        timestamp: serverTimestamp(),
        visitor: visitorInfo
      })

      // Send email notification (implement with Cloud Functions)
      await sendEmailNotification(formData, visitorInfo)

      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  // Get contact submissions (admin only)
  const getContactSubmissions = async () => {
    loading.value = true
    error.value = null

    try {
      const q = query(
        collection(db, 'contact_submissions'), 
        orderBy('timestamp', 'desc'),
        limit(50)
      )
      const querySnapshot = await getDocs(q)
      const submissions = []

      querySnapshot.forEach((doc) => {
        submissions.push({
          id: doc.id,
          ...doc.data()
        })
      })

      return submissions
    } catch (err) {
      error.value = err.message
      return []
    } finally {
      loading.value = false
    }
  }

  // Download resume
  const downloadResume = async () => {
    try {
      const resumeRef = storageRef(storage, 'files/resume.pdf')
      const downloadURL = await getDownloadURL(resumeRef)

      // Track download event
      await trackEvent('resume_download')

      // Trigger download
      window.open(downloadURL, '_blank')

      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Track visitor
  const trackVisitor = async (data) => {
    try {
      const visitorInfo = await getVisitorInfo()

      await addDoc(collection(db, 'site_visitors'), {
        ...data,
        ...visitorInfo,
        timestamp: serverTimestamp()
      })
    } catch (err) {
      console.error('Visitor tracking error:', err)
    }
  }

  // Track events
  const trackEvent = async (eventName, eventData = {}) => {
    try {
      await addDoc(collection(db, 'site_analytics'), {
        event: eventName,
        data: eventData,
        timestamp: serverTimestamp()
      })
    } catch (err) {
      console.error('Event tracking error:', err)
    }
  }

  // Get visitor information
  const getVisitorInfo = async () => {
    try {
      const [ipResponse, locationResponse] = await Promise.all([
        fetch('https://api.ipify.org?format=json').catch(() => null),
        fetch('https://ipapi.co/json/').catch(() => null)
      ])

      const ipData = ipResponse ? await ipResponse.json() : { ip: 'unknown' }
      const locationData = locationResponse ? await locationResponse.json() : {}

      return {
        ip: ipData.ip || 'unknown',
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        referrer: document.referrer || 'direct',
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        city: locationData.city || 'unknown',
        country: locationData.country_name || 'unknown'
      }
    } catch {
      return {
        ip: 'unknown',
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform
      }
    }
  }

  // Send email notification (placeholder - implement with Cloud Functions)
  const sendEmailNotification = async (formData, visitorInfo) => {
    // This would be implemented with Firebase Cloud Functions
    console.log('Email notification would be sent:', {
      to: 'tinendra.kumar@gmail.com',
      subject: `New Portfolio Contact: ${formData.subject}`,
      formData,
      visitorInfo
    })
  }

  // Get visitor analytics (admin only)
  const getVisitorAnalytics = async () => {
    loading.value = true
    error.value = null

    try {
      const q = query(
        collection(db, 'site_visitors'), 
        orderBy('timestamp', 'desc'),
        limit(100)
      )
      const querySnapshot = await getDocs(q)
      const visitors = []

      querySnapshot.forEach((doc) => {
        visitors.push({
          id: doc.id,
          ...doc.data()
        })
      })

      // Debug: Log fetched data
      console.log('Fetched visitors:', visitors)

      return visitors
    } catch (err) {
      error.value = err.message
      console.error('Error fetching visitors:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  // Get page views (admin only)
  const getPageViews = async () => {
    loading.value = true
    error.value = null

    try {
      const q = query(
        collection(db, 'page_views'), 
        orderBy('timestamp', 'desc'),
        limit(100)  // Removed orderBy('ip') to avoid index requirement
      )
      const querySnapshot = await getDocs(q)
      const views = []

      querySnapshot.forEach((doc) => {
        views.push({
          id: doc.id,
          ...doc.data()
        })
      })

      // Debug: Log fetched data
      console.log('Fetched page views:', views)

      return views
    } catch (err) {
      error.value = err.message
      console.error('Error fetching page views:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    submitContact,
    getContactSubmissions,
    downloadResume,
    trackVisitor,
    trackEvent,
    getVisitorAnalytics,
    getPageViews
  }
}
