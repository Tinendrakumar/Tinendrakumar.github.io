import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
  const auth = getAuth();
  const isAuthenticated = ref(false);
  const error = ref(null);

  // Login with Firebase email/password
  const authenticateAdmin = async (email, password) => {
    try {
      error.value = null;
      await signInWithEmailAndPassword(auth, email, password);
      isAuthenticated.value = true;
      return true;
    } catch (err) {
      error.value = err.message;
      return false;
    }
  };

  // Logout from Firebase
  const logout = () => {
    signOut(auth)
      .then(() => {
        isAuthenticated.value = false;
      })
      .catch((err) => {
        error.value = err.message;
      });
  };

  // Check current auth status (runs on app start)
  const checkAuthStatus = () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        isAuthenticated.value = !!user;
        resolve(!!user);
      });
    });
  };

  return {
    isAuthenticated,
    authenticateAdmin,
    logout,
    checkAuthStatus,
    error,
  };
}
