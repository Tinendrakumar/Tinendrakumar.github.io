<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Left Section: Contact Information -->
        <div class="footer-section contact-details">
          <div class="contact-item">
            <span class="contact-label">Call</span>
            <a href="tel:+15551234567" class="contact-value">+1 (857) 209-8105</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">Write</span>
            <a href="mailto:tinendra.kandula@gmail.com" class="contact-value">tinendra.kandula@gmail.com</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">Follow</span>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/tinendra-kumar/" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/TinendraKumar/" class="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                 </svg>
              </a>
              <a href="https://www.instagram.com/tinendra_kumar/" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Right Section: Copyright and Admin Trigger -->
        <div class="footer-section copyright" @click="handleAdminClick">
          <p>&copy; 2025 by Tinendra Kandula.</p>
          <p>Powered and secured by Firebase</p>
          <transition name="fade">
            <button v-if="showAdminButton" class="admin-button" @click.stop="$emit('admin-access')">
              Admin Panel
            </button>
          </transition>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Footer',
  emits: ['admin-access'],
  setup() {
    const showAdminButton = ref(false);
    const clickCount = ref(0);
    let clickTimer = null;

    const handleAdminClick = () => {
      clickCount.value++;

      // Reset the timer on each click
      if (clickTimer) {
        clearTimeout(clickTimer);
      }

      // Set a timer to reset the click count after 1.5 seconds
      clickTimer = setTimeout(() => {
        clickCount.value = 0;
      }, 1500);

      // If 3 clicks are registered, show the button
      if (clickCount.value >= 3) {
        showAdminButton.value = true;
        clickCount.value = 0; // Reset count
        clearTimeout(clickTimer); // Clear the timer
      }
    };

    return {
      showAdminButton,
      handleAdminClick
    };
  }
}
</script>

<style scoped>
.site-footer {
  position: relative;
  z-index: 10;
  background: #0f172a; /* A dark, modern background */
  color: #e2e8f0;
  padding: 3rem 0;
  margin-top: auto;
  border-top: 1px solid #334155;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: flex-start;
}

.contact-details {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  font-size: 1rem;
  color: #f8fafc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #3b82f6;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.05);
  color: #94a3b8;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-3px);
}

.copyright {
  text-align: right;
  cursor: pointer; /* Indicates the area is interactive */
  user-select: none; /* Prevents text selection */
}

.copyright p {
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.5;
}

.admin-button {
  background: #3b82f6;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

.admin-button:hover {
  background: #2563eb;
  transform: scale(1.05);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  .contact-details {
    flex-direction: column;
    align-items: center;
  }
  .copyright {
    text-align: center;
  }
}
</style>
