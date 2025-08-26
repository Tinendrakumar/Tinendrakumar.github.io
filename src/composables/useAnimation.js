import { ref, onMounted, onUnmounted } from 'vue'
import { animationConfig, createRippleEffect, staggerAnimation } from '@/utils/animations'

export function useAnimation() {
  const isVisible = ref(false)
  const animationState = ref('idle')

  // Intersection Observer for scroll animations
  const observeElement = (element, callback) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (element) {
      observer.observe(element)
    }

    return observer
  }

  // Animate on scroll
  const animateOnScroll = (element) => {
    if (!element) return

    observeElement(element, (target) => {
      target.classList.add('animate-in')
    })
  }

  // Stagger animation for lists
  const animateList = (containerRef, delay = 100) => {
    if (!containerRef.value) return

    const items = containerRef.value.querySelectorAll('.animate-item')
    staggerAnimation(Array.from(items), delay)
  }

  // Ripple effect for buttons
  const addRippleEffect = (event) => {
    const button = event.currentTarget
    createRippleEffect(button, event)
  }

  return {
    isVisible,
    animationState,
    animationConfig,
    observeElement,
    animateOnScroll,
    animateList,
    addRippleEffect
  }
}