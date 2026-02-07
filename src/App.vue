<template>
  <div class="app-layout">
    <!-- Animated Background sits behind all content -->
    <!-- Animated Background sits behind all content -->
    <div class="bg-elements">
      <div class="floating-element floating-element-1"></div>
      <div class="floating-element floating-element-2"></div>
      <div class="floating-element floating-element-3"></div>
      <div class="mesh-gradient"></div>
    </div>

    <!-- The Navbar is always visible and emits events to open overlays -->
    <Navbar @show-overlay="setActiveOverlay" />

    <!-- Main page content rendered by the router (Home, Admin, etc.) with transition -->
    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" @show-overlay="setActiveOverlay" class="main-content-area" />
      </transition>
    </router-view>

    <!-- Overlay System with Flicker-Prevention Fix -->
    <transition name="fade">
      <div v-if="activeOverlay" class="overlay-backdrop" :style="{ display: activeOverlay ? 'flex' : 'none' }" @click.self="clearActiveOverlay">
        <transition name="slide-up">
          <component
            :is="activeOverlay"
            @close="clearActiveOverlay"
            class="overlay-content-wrapper"
          />
        </transition>
      </div>
    </transition>

    <!-- Footer for Admin Access -->
    <Footer @admin-access="openAdminModal" />

    <!-- Admin Access Modal -->
    <BaseModal
      v-model="showAdminModal"
      @close="showAdminModal = false"
      title="Admin Access"
      size="small"
    >
      <div class="admin-login">
        <h3>Admin Access</h3>
        <input
          type="email"
          v-model="adminEmail"
          placeholder="Admin email"
          @keyup.enter="checkAdminPassword"
        />
        <input
          type="password"
          v-model="adminPassword"
          placeholder="Enter admin password"
          @keyup.enter="checkAdminPassword"
        />
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <BaseButton @click="checkAdminPassword">Login</BaseButton>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import BaseModal from '@/components/ui/BaseModal.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import About from '@/views/About.vue';
import Resume from '@/views/Resume.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';
import { useAuth } from '@/composables/useAuth';
import { useVisitorTracking } from '@/composables/useVisitorTracking';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    BaseModal,
    BaseButton,
    About,
    Resume,
    Projects,
    Contact,
  },
  setup() {
    const router = useRouter();
    const { authenticateAdmin } = useAuth();
    const { trackVisitorSession } = useVisitorTracking();

    const activeOverlay = ref(null);
    const showAdminModal = ref(false);
    const adminEmail = ref('');
    const adminPassword = ref('');
    const savedScrollPosition = ref(0);
    const errorMessage = ref('');

    // Dedicated function to reset body styles (your working code, made reusable)
    const resetBodyStyles = () => {
      try {
        document.body.classList.remove('overlay-active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        console.log('Body styles reset');
      } catch (err) {
        console.error('Error resetting body styles:', err);
      }
    };

    onMounted(() => {
      trackVisitorSession();
      resetBodyStyles(); // Your working reset on initial mount
    });

    const setActiveOverlay = (componentName) => {
      savedScrollPosition.value = window.pageYOffset;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollPosition.value}px`;
      document.body.style.width = '100%';
      document.body.classList.add('overlay-active');
      activeOverlay.value = componentName;
    };

    const clearActiveOverlay = () => {
      activeOverlay.value = null;
      resetBodyStyles(); // Use the reset function here for consistency
      window.scrollTo(0, savedScrollPosition.value);
    };

    const checkAdminPassword = async () => {
      errorMessage.value = '';
      const isValid = await authenticateAdmin(adminEmail.value, adminPassword.value);
      if (isValid) {
        showAdminModal.value = false;
        resetBodyStyles(); // Clear locks before navigation
        window.scrollTo(0, 0);
        router.push('/admin');
      } else {
        errorMessage.value = 'Invalid email or password. Please try again.';
      }
      adminPassword.value = '';
    };

    const openAdminModal = () => {
      resetBodyStyles(); // Clear any locks before opening modal
      showAdminModal.value = true;
    };

    // Added: Reset after every navigation (e.g., logout to home)
    router.afterEach(() => {
      resetBodyStyles();
    });

    return {
      activeOverlay,
      showAdminModal,
      adminEmail,
      adminPassword,
      setActiveOverlay,
      clearActiveOverlay,
      checkAdminPassword,
      openAdminModal,
      errorMessage
    };
  },
};
</script>

<style>
/* Global styles are imported in main.js */

/* App-level styles */
.app-layout {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background-color: transparent;
}

/* Removed html.dark .app-layout background color to prevent double-darkening */

.main-content-area {
  position: relative;
  z-index: 1;
}

/* Main App Structure */
.main-content-area {
  position: relative;
  z-index: 1;
}

/* Background Elements moved to main.css/dark-theme.css for better control */

/* CORRECTED OVERLAY STYLES TO PREVENT FLICKERING */
.overlay-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

html.dark .overlay-backdrop {
  background: rgba(10, 14, 26, 0.92);
}

.overlay-content-wrapper {
  width: 100%;
  height: 100%;
  max-width: 1100px;
  max-height: 90vh;
  overflow-y: auto;
}

/* Scroll preservation styles */
body.overlay-active {
  overflow: hidden;
}

/* Page & Overlay transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Page transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* Admin login styles */
.admin-login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  background: white; /* Added background for visibility inside BaseModal */
  border-radius: 0.75rem; /* Added border-radius */
}

.admin-login h3 {
  margin: 0 0 1rem 0;
  color: #1E293B;
  font-size: 1.5rem;
}

.admin-login input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.admin-login input:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .overlay-backdrop {
    padding: 1rem;
  }
}
</style>
