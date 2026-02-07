<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div v-if="modelValue" class="modal-overlay" @click="handleOverlayClick">
        <div class="modal-container" :class="containerClasses" @click.stop>
          <div class="modal-header" v-if="$slots.header || showCloseButton">
            <slot name="header">
              <h3 v-if="title" class="modal-title">{{ title }}</h3>
            </slot>
            <button
              v-if="showCloseButton"
              class="modal-close"
              @click="close"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <div class="modal-body">
            <slot />
          </div>

          <div class="modal-footer" v-if="$slots.footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { computed, onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'BaseModal',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large', 'full'].includes(value)
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    closeOnOverlay: {
      type: Boolean,
      default: true
    },
    closeOnEscape: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue', 'close'],
  setup(props, { emit }) {
    const containerClasses = computed(() => [
      `modal-container--${props.size}`
    ])

    const close = () => {
      emit('update:modelValue', false)
      emit('close')
    }

    const handleOverlayClick = () => {
      if (props.closeOnOverlay) {
        close()
      }
    }

    const handleEscape = (event) => {
      if (props.closeOnEscape && event.key === 'Escape') {
        close()
      }
    }

    const toggleBodyLock = (isLocked) => {
      document.body.style.overflow = isLocked ? 'hidden' : ''
    }

    watch(() => props.modelValue, (val) => {
      toggleBodyLock(val)
    })

    onMounted(() => {
      if (props.closeOnEscape) {
        document.addEventListener('keydown', handleEscape)
      }
      if (props.modelValue) {
        toggleBodyLock(true)
      }
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscape)
      toggleBodyLock(false)
    })

    return {
      containerClasses,
      close,
      handleOverlayClick
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 2000; /* Ensured to be above overlays */
}

.modal-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-container--small {
  max-width: 400px;
  width: 100%;
}

.modal-container--medium {
  max-width: 600px;
  width: 100%;
}

.modal-container--large {
  max-width: 800px;
  width: 100%;
}

.modal-container--full {
  width: 95%;
  height: 95%;
  max-width: none;
  max-height: none;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.modal-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1E293B;
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  color: #64748B;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #1E293B;
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.02);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95) translateY(-20px);
  opacity: 0;
}
</style>
