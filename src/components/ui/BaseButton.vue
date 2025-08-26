<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
    v-bind="$attrs"
  >
    <div class="button-content">
      <LoadingSpinner v-if="loading" size="small" />
      <slot v-else />
    </div>
    <div class="button-ripple" ref="rippleContainer"></div>
  </button>
</template>

<script>
import { computed, ref } from 'vue'
import { useAnimation } from '@/composables/useAnimation'
import LoadingSpinner from './LoadingSpinner.vue'

export default {
  name: 'BaseButton',
  components: {
    LoadingSpinner
  },
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'text', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const { addRippleEffect } = useAnimation()
    const rippleContainer = ref(null)

    const buttonClasses = computed(() => [
      'base-button',
      `base-button--${props.variant}`,
      `base-button--${props.size}`,
      {
        'base-button--disabled': props.disabled,
        'base-button--loading': props.loading,
        'base-button--full-width': props.fullWidth
      }
    ])

    const handleClick = (event) => {
      if (!props.disabled && !props.loading) {
        addRippleEffect(event)
        emit('click', event)
      }
    }

    return {
      buttonClasses,
      handleClick,
      rippleContainer
    }
  }
}
</script>

<style scoped>
.base-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
  user-select: none;
  min-height: 2.75rem;
  font-family: inherit;
}

.base-button--primary {
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  color: white;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
}

.base-button--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.base-button--secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #1E293B;
  border: 1px solid rgba(30, 41, 59, 0.2);
  backdrop-filter: blur(10px);
}

.base-button--secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(30, 41, 59, 0.3);
}

.base-button--outline {
  background: transparent;
  color: #3B82F6;
  border: 2px solid #3B82F6;
}

.base-button--outline:hover {
  background: #3B82F6;
  color: white;
}

.base-button--text {
  background: transparent;
  color: #3B82F6;
  padding: 0.5rem 1rem;
}

.base-button--text:hover {
  background: rgba(59, 130, 246, 0.1);
}

.base-button--danger {
  background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
  color: white;
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
}

.base-button--danger:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

.base-button--small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  min-height: 2.25rem;
}

.base-button--large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  min-height: 3.25rem;
}

.base-button--full-width {
  width: 100%;
}

.base-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.base-button--loading {
  cursor: wait;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.button-ripple {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>