// Animation utility functions and configurations

export const animationConfig = {
  durations: {
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 750
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
}

// Create ripple effect for buttons
export const createRippleEffect = (element, event) => {
  const rect = element.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  const ripple = document.createElement('span')
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `

  element.appendChild(ripple)

  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple)
    }
  }, 600)
}

// Stagger animation for lists
export const staggerAnimation = (elements, delay = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate-in')
    }, index * delay)
  })
}

// Fade in animation
export const fadeIn = (element, duration = 300) => {
  element.style.opacity = '0'
  element.style.transition = `opacity ${duration}ms ease`

  requestAnimationFrame(() => {
    element.style.opacity = '1'
  })
}

// Slide in animation
export const slideIn = (element, direction = 'up', duration = 300) => {
  const transforms = {
    up: 'translateY(30px)',
    down: 'translateY(-30px)',
    left: 'translateX(30px)',
    right: 'translateX(-30px)'
  }

  element.style.transform = transforms[direction]
  element.style.opacity = '0'
  element.style.transition = `all ${duration}ms ease`

  requestAnimationFrame(() => {
    element.style.transform = 'translate(0)'
    element.style.opacity = '1'
  })
}

// Scale animation
export const scaleIn = (element, duration = 300) => {
  element.style.transform = 'scale(0.9)'
  element.style.opacity = '0'
  element.style.transition = `all ${duration}ms ${animationConfig.easing.smooth}`

  requestAnimationFrame(() => {
    element.style.transform = 'scale(1)'
    element.style.opacity = '1'
  })
}

// Parallax scrolling effect
export const parallaxScroll = (elements, factor = 0.5) => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset

    elements.forEach(element => {
      const rate = scrolled * factor
      element.style.transform = `translateY(${rate}px)`
    })
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}

// Smooth scroll to element
export const smoothScrollTo = (element, duration = 500) => {
  const start = window.pageYOffset
  const target = element.getBoundingClientRect().top + start
  const startTime = performance.now()

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, start + (target - start) * ease)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

// Typewriter effect
export const typewriterEffect = (element, text, speed = 50) => {
  element.textContent = ''
  let i = 0

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}