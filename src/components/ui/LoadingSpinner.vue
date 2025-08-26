<template>
  <div :class="spinnerClasses" :style="spinnerStyle">
    <div class="spinner-circle"></div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'LoadingSpinner',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  setup(props) {
    const sizes = {
      small: '1rem',
      medium: '1.5rem',
      large: '2rem'
    }

    const colors = {
      primary: '#3B82F6',
      secondary: '#64748B',
      white: '#FFFFFF',
      dark: '#1E293B'
    }

    const spinnerClasses = computed(() => [
      'loading-spinner',
      `loading-spinner--${props.size}`
    ])

    const spinnerStyle = computed(() => ({
      width: sizes[props.size],
      height: sizes[props.size],
      borderTopColor: colors[props.color] || props.color
    }))

    return {
      spinnerClasses,
      spinnerStyle
    }
  }
}
</script>

<style scoped>
.loading-spinner {
  display: inline-block;
  position: relative;
}

.spinner-circle {
  width: 100%;
  height: 100%;
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-top: 2px solid #3B82F6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loading-spinner--small .spinner-circle {
  border-width: 1px;
}

.loading-spinner--large .spinner-circle {
  border-width: 3px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>