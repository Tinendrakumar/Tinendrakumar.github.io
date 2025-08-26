import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth methods
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    // Lazy loading for the admin component is a great performance practice
    component: () => import('@/views/AdminDashboard.vue'),
    meta: {
      requiresAuth: true, // This meta field marks the route as protected
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

/**
 * Creates a promise that resolves with the current Firebase user.
 * This is the modern way to handle the async nature of Firebase Auth.
 * @returns {Promise<User|null>}
 */
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(); // Unsubscribe after the first state change
        resolve(user);
      },
      reject
    );
  });
};

/**
 * Secure Admin Route Guard
 * This guard runs before each navigation.
 */
router.beforeEach(async (to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // Wait to see if there is a currently logged-in user from Firebase
    if (await getCurrentUser()) {
      // If there is a user, allow them to proceed to the admin page
      next();
    } else {
      // If there is no user, redirect them to the homepage
      alert('You do not have access to this page. Please log in as an admin.');
      next('/');
    }
  } else {
    // If the route does not require authentication, always allow access
    next();
  }
});

export default router;
