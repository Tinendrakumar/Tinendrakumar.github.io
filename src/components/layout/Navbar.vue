<template>
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-text">
          Tinendra Kandula
        </router-link>
        <div class="brand-underline"></div>
      </div>
      <div class="nav-right">
        <ul class="nav-menu">
          <li v-for="item in navItems" :key="item.name">
            <a
              href="#"
              class="nav-link"
              @click.prevent="$emit('show-overlay', item.route)"
            >
              <span class="nav-text">{{ item.name }}</span>
              <div class="nav-hover-effect"></div>
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

export default {
  name: 'Navbar',
  components: {
    ThemeToggle
  },
  emits: ['show-overlay'],
  data() {
    return {
      navItems: [
        { name: 'ABOUT ME', route: 'About' },
        { name: 'RESUME', route: 'Resume' },
        { name: 'PROJECTS', route: 'Projects' },
        { name: 'CONTACT', route: 'Contact' },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--glass-background);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--color-border-light);
  z-index: 1000;
  transition: all 0.3s ease;
}

:global(.dark) .navbar {
  background: var(--glass-background);
  border-bottom: 1px solid var(--color-border-light);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-brand {
  position: relative;
  cursor: pointer;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}

.brand-underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: left;
}

.nav-brand:hover .brand-underline {
  transform: scaleX(1);
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
}

.nav-link {
  position: relative;
  display: block;
  padding: 0.5rem 0;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  overflow: hidden;
}

:global(.dark) .nav-link {
  color: var(--color-text-secondary);
}

.nav-link:hover {
  color: var(--color-primary-500);
}

:global(.dark) .nav-link:hover {
  color: var(--color-primary-400);
}

.nav-hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-primary);
  transform: translateX(-101%);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.nav-link:hover .nav-hover-effect {
  transform: translateX(0);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-right {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-menu {
    gap: 1.5rem;
  }
}
</style>