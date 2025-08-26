import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

let app
let db
let storage
let analytics

export const initializeFirebase = () => {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    storage = getStorage(app)

    // Initialize analytics only in production
    if (import.meta.env.PROD) {
      analytics = getAnalytics(app)
    }

    console.log('Firebase initialized successfully')
    return app
  } catch (error) {
    console.error('Firebase initialization error:', error)
    throw error
  }
}

export { db, storage, analytics }
export default app