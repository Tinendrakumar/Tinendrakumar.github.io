<template>
  <main class="homepage">
    <section class="hero">
      <div class="hero-container">
        <div class="hero-image">
          <div class="profile-placeholder">
            <img
              src="@/assets/images/1.jpg"
              alt="Tinendra Kandula"
              loading="lazy"
              class="profile-img"
            />
          </div>
        </div>
        <div class="hero-content">
          <h2 class="hero-title">Hello, I'm Tinendra Kandula</h2>
          <div class="hero-buttons">
            <!-- 
              CORRECTED: This now emits the event directly.
              This is the standard, reliable Vue way for this component to "talk" to App.vue.
            -->
            <BaseButton
              variant="primary"
              @click="$emit('show-overlay', 'Resume')"
            >
              RESUME
            </BaseButton>
            <BaseButton
              variant="primary"
              @click="$emit('show-overlay', 'Projects')"
            >
              PROJECTS
            </BaseButton>
          </div>
          <div class="hero-description">
            <p>{{ personalInfo.intro }}</p>
            <p>{{ personalInfo.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// We only need to import the components and composables we use.
import BaseButton from '@/components/ui/BaseButton.vue';
import { useVisitorTracking } from '@/composables/useVisitorTracking';
import { onMounted } from 'vue';

export default {
  name: 'Home',
  components: {
    BaseButton,
  },
  // CRITICAL: Declare the event this component emits. This is Vue 3 best practice.
  emits: ['show-overlay'],
  setup() {
    const { trackPageView } = useVisitorTracking();
    
    // Your personal info is perfectly fine here.
    const personalInfo = {
      intro:
        'Machine Learning | Generative AI | Multi‑modal ML | NLP',
      description:
        'Machine Learning Engineer with a passion for building intelligent systems that solve real-world problems. I specialize in Generative AI, multi-modal learning, and natural language processing, leveraging AWS and SageMaker to deploy scalable solutions.',
    };

    onMounted(() => {
        // The only thing we need to do when the component mounts is track the page view.
        trackPageView('home');
    });

    // We no longer need the complex 'showOverlay' method here.
    // The template emits the event directly.

    return {
      personalInfo,
    };
  },
};
</script>

<style scoped>
/* Aesthetic, responsive, accessible hero styles with fluid typography and smooth interactions */

.homepage {
  /* CSS variables for easy theming & motion */
  --bg: linear-gradient(180deg, rgba(250,250,255,0.6), rgba(240,248,255,0.55));
  --card-bg: rgba(255,255,255,0.85);
  --glass: rgba(255,255,255,0.35);
  --primary-600: #3b82f6;
  --accent-600: #54ab47;
  --text-primary: #0f172a;
  --muted: #475569;
  --radius-lg: 1.5rem;
  --radius-sm: 0.75rem;
  --shadow-lg: 0 20px 60px rgba(16,24,40,0.12);
  --shadow-sm: 0 6px 20px rgba(16,24,40,0.06);

  /* motion timings */
  --motion-fast: 240ms;
  --motion-medium: 420ms;
  --motion-slow: 800ms;
  --ease-out: cubic-bezier(.2,.9,.3,1);

  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 3rem);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Centered, constrained container that adapts to viewport */
.hero {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Grid layout that becomes stacked on small viewports */
.hero-container {
  /* Responsive grid with flexible columns */
  display: grid;
  grid-template-columns: minmax(220px, 380px) 1fr;
  gap: clamp(1.25rem, 3.5vw, 4rem);
  align-items: center;
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,250,255,0.85));
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: clamp(1.25rem, 3.75vw, 3rem);
  width: 100%;
  overflow: hidden;
  min-height: clamp(48vh, 60vh, 72vh);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: clamp(1.25rem, 3.75vw, 3rem);
  width: 100%;
  overflow: hidden;
  margin-top: 4%;
  margin-bottom: auto;

  /* entrance animation for the card */
  animation: cardFadeUp var(--motion-slow) var(--ease-out) both;
}
/* Add the <img> element inside the .hero-image in the template, e.g.:
  <img src="@/assets/images/1.jpg" alt="Tinendra Kandula" loading="lazy" class="profile-img" />
  Place it alongside the .profile-placeholder (before or after) so the placeholder acts as a fallback.
*/

.profile-img {
  width: 100%;
  max-width: 360px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  box-shadow: 0 24px 48px rgba(16,24,40,0.12);
  transition: transform 320ms var(--ease-out), box-shadow 320ms var(--ease-out);
  will-change: transform;
}

/* When the image is present hide the initials fallback */
.profile-img + .profile-placeholder .profile-initials,
.profile-img ~ .profile-placeholder .profile-initials {
  opacity: 0 !important;
  transform: translateY(0) scale(0.98);
  pointer-events: none;
}
/* Profile image area with graceful fallback and cover behavior */
.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  position: relative;

  /* subtle pop-in */
  animation: popIn var(--motion-medium) var(--ease-out) both;
}

/* Profile placeholder with hover and motion */
.profile-placeholder {
  --size: clamp(160px, 24vw, 320px);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary-600), var(--accent-600));
  box-shadow: 0 24px 48px rgba(16,24,40,0.12), inset 0 -6px 18px rgba(0,0,0,0.06);
  transform: translateZ(0);
  transition: transform 320ms cubic-bezier(.2,.9,.3,1), box-shadow 320ms;
  isolation: isolate;
  image-rendering: -webkit-optimize-contrast;

  will-change: transform;
  animation: floatEase var(--motion-slow) var(--ease-out) both infinite;
  animation-duration: 7s;
}

/* Use asset via resolver-friendly syntax (webpack / Vite) */
.profile-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.02) contrast(1.03);
  transition: transform 800ms cubic-bezier(.2,.9,.3,1);
  will-change: transform;
  animation: bgSlowShift var(--motion-slow) var(--ease-out) both infinite;
  animation-duration: 14s;
}
/* Subtle hover/tilt interaction */
.profile-placeholder:hover {
  transform: translateY(-8px) scale(1.02) rotateZ(0.5deg);
  box-shadow: 0 40px 80px rgba(16,24,40,0.14);
}
.profile-placeholder:hover::before {
  transform: scale(1.03) translateY(-4px);
}

/* Placeholder initials as fallback (screen-reader-hidden when image present) */
.profile-initials {
  position: relative;
  z-index: 2;
  font-size: clamp(2.25rem, 4.5vw, 4rem);
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  text-shadow: 0 4px 18px rgba(13, 27, 39, 0.35);
  letter-spacing: -0.02em;
  user-select: none;

  /* slight reveal */
  opacity: 0;
  transform: translateY(8px) scale(0.98);
  animation: textReveal var(--motion-medium) var(--ease-out) both;
  animation-delay: 120ms;
}

/* Content column */
.hero-content {
  max-width: 720px;
}

/* Fluid typography */
.hero-title {
  font-size: clamp(2.25rem, 2.5vw, 4rem);
  line-height: 1.02;
  margin: 0 0 0.4rem 0;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  display: block;
  text-wrap: balance;
  transform-origin: left;
  margin-bottom: 4%;

  opacity: 0;
  transform: translateY(14px) scale(0.992);
  animation: headingSlide var(--motion-medium) var(--ease-out) both;
  animation-delay: 80ms;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.25vw, 1.25rem);
  color: var(--muted);
  margin: 0 0 0.5rem 0;
  font-weight: 600;

  opacity: 0;
  transform: translateY(12px);
  animation: headingSlide var(--motion-medium) var(--ease-out) both;
  animation-delay: 160ms;
}

.hero-greeting {
  font-size: clamp(0.98rem, 2vw, 1.125rem);
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  opacity: 0.95;

  opacity: 0;
  transform: translateY(10px);
  animation: headingSlide var(--motion-medium) var(--ease-out) both;
  animation-delay: 240ms;
}

/* Buttons container with responsive wrapping */
.hero-buttons {
  display: flex;
  gap: 0.75rem;
  margin: 0.75rem 0 1.25rem 0;
  flex-wrap: wrap;
  align-items: center;

  opacity: 0;
  transform: translateY(6px);
  animation: headingSlide var(--motion-medium) var(--ease-out) both;
  animation-delay: 320ms;
}

/* Buttons inside may receive subtle hover lift via CSS; rely on component for primary styles */
.hero-buttons > * {
  transition: transform 220ms var(--ease-out), box-shadow 220ms var(--ease-out);
}
.hero-buttons > *:hover {
  transform: translateY(-4px);
}

/* Description card with nice scroll, contrast and accessible sizing */
.hero-description {
  color: var(--text-primary);
  line-height: 1.65;
  border-left: 5px solid rgba(0,0,0,0.06);
  padding: clamp(1rem, 2.5vw, 1.5rem);
  background: linear-gradient(100deg, rgba(59,130,246,0.06) 0%, rgba(84,171,71,0.04) 100%);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-sm);
  margin-top: 0.75rem;
  max-height: min(36vh, 340px);
  overflow-y: auto;
  position: relative;
  transition: box-shadow 240ms ease, transform 240ms ease;
  will-change: transform, box-shadow;
  opacity: 0;
  transform: translateY(8px);
  animation: cardFadeUp var(--motion-medium) var(--ease-out) both;
  animation-delay: 40ms;
}

/* Thin custom scrollbar for the description */
.hero-description::-webkit-scrollbar {
  width: 10px;
}
.hero-description::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(59,130,246,0.35), rgba(84,171,71,0.25));
  border-radius: 999px;
}
.hero-description::-webkit-scrollbar-track {
  background: transparent;
}

/* Paragraphs */
.hero-description p {
  margin: 0 0 0.9rem 0;
  font-size: clamp(0.98rem, 1.6vw, 1.05rem);
  color: var(--muted);
}
.hero-description p:last-child {
  margin-bottom: 0;
}

/* Small decorative vertical accent */
.hero-description::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  width: 6px;
  border-radius: 6px;
  background: linear-gradient(180deg, var(--primary-600), var(--accent-600));
  opacity: 0.95;
}

/* Motion & accessibility */
@media (prefers-reduced-motion: reduce) {
  .profile-placeholder,
  .profile-placeholder::before,
  .profile-placeholder:hover,
  .hero-description,
  .hero-title,
  .hero-subtitle,
  .hero-greeting,
  .hero-buttons,
  .hero-container,
  .profile-initials {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }
}

/* Responsive stacking for small screens */
@media (max-width: 880px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: clamp(1rem, 4vw, 2.2rem);
    padding: clamp(1rem, 5vw, 1.6rem);
    min-height: auto;
  }

  .hero-image {
    margin-top: 0.25rem;
  }

  .hero-content {
    text-align: center;
  }

  .hero-description {
    max-height: 40vh;
  }
}

/* Small tweaks for very narrow screens */
@media (max-width: 420px) {
  .profile-placeholder { --size: 140px; }
  .hero-title { font-size: 1.9rem; }
  .hero-buttons { justify-content: center; gap: 0.5rem; }
}

/* -------------------
   Keyframes (animations)
   ------------------- */
@keyframes cardFadeUp {
  0% { opacity: 0; transform: translateY(18px) scale(0.996); }
  60% { opacity: 1; transform: translateY(-6px) scale(1.002); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes popIn {
  0% { opacity: 0; transform: translateY(18px) scale(0.96); }
  60% { opacity: 1; transform: translateY(-4px) scale(1.01); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes floatEase {
  0% { transform: translateY(0) rotateZ(0); }
  50% { transform: translateY(-6px) rotateZ(0.3deg); }
  100% { transform: translateY(0) rotateZ(0); }
}

@keyframes bgSlowShift {
  0% { transform: scale(1) translateY(0); filter: saturate(1.02) contrast(1.03); }
  50% { transform: scale(1.02) translateY(-8px); filter: saturate(1.08) contrast(1.05); }
  100% { transform: scale(1) translateY(0); filter: saturate(1.02) contrast(1.03); }
}

@keyframes headingSlide {
  0% { opacity: 0; transform: translateY(14px) scale(0.994); }
  60% { opacity: 1; transform: translateY(-2px) scale(1.002); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes textReveal {
  0% { opacity: 0; transform: translateY(10px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
</style>
