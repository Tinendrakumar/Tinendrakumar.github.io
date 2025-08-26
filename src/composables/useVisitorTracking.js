import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * A self-contained composable for advanced visitor and event tracking.
 * It directly communicates with Firebase.
 */
export function useVisitorTracking() {
  
  /**
   * A generic function to add a document to a specified collection in Firestore.
   * @param {string} collectionName - The name of the collection.
   * @param {object} data - The data object to save.
   */
  const addDataToFirestore = async (collectionName, data) => {
    try {
      const db = getFirestore();
      await addDoc(collection(db, collectionName), {
        ...data,
        timestamp: serverTimestamp(), // Add a server-side timestamp to every event
      });
    } catch (error) {
      console.error(`Error writing to Firestore collection '${collectionName}':`, error);
      // Fail silently in the background
    }
  };

  /**
   * Fetches the visitor's IP address asynchronously.
   * @returns {Promise<string>} The IP address or 'unknown' on failure.
   */
  const getIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Failed to fetch IP:', error);
      return 'unknown';
    }
  };

  /**
   * Tracks a page visit event, now including IP.
   * @param {string} pageName - The name of the page being viewed (e.g., 'Home', 'About').
   */
  const trackPageView = async (pageName) => {
    const ip = await getIP();  // Fetch IP asynchronously
    const pageViewData = {
      page: pageName,
      url: window.location.href,
      ip: ip  // Now includes IP
    };
    addDataToFirestore('page_views', pageViewData);
  };

  /**
   * Tracks a specific user interaction, like a button click or form submission.
   * @param {string} type - The type of interaction (e.g., 'button_click').
   * @param {string} element - A description of the element being interacted with.
   * @param {object} [data={}] - Optional additional data.
   */
  const trackInteraction = (type, element, data = {}) => {
    const interactionData = {
      type,
      element,
      ...data,
    };
    addDataToFirestore('user_interactions', interactionData);
  };

  /**
   * Tracks the initial visitor session with detailed browser/device info.
   * This is the function that replaces the original `trackVisitor`.
   */
  const trackVisitorSession = () => {
    const sessionData = {
      sessionStart: new Date().toISOString(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer || 'direct',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    addDataToFirestore('visitor_sessions', sessionData);
  };

  // We now return all the new, specific tracking functions.
  return {
    trackPageView,
    trackInteraction,
    trackVisitorSession, // This is the main function to call when the app loads.
  };
}
