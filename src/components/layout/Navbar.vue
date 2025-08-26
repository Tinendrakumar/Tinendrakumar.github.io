<template>
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-text">
          Tinendra Kandula
        </router-link>
        <div class="brand-underline"></div>
      </div>
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
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.4);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.nav-brand {
  position: relative;
  cursor: pointer;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
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
  color: #475569;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  overflow: hidden;
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
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
  .nav-menu {
    gap: 1.5rem;
  }
}
</style>