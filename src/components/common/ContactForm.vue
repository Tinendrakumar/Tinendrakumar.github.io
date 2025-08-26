<template>
  <div class="contact-form-container">
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First Name *</label>
          <input
            id="firstName"
            type="text"
            v-model="formData.firstName"
            :class="{ error: errors.firstName }"
            @blur="validateField('firstName')"
          >
          <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
        </div>

        <div class="form-group">
          <label for="lastName">Last Name *</label>
          <input
            id="lastName"
            type="text"
            v-model="formData.lastName"
            :class="{ error: errors.lastName }"
            @blur="validateField('lastName')"
          >
          <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email *</label>
        <input
          id="email"
          type="email"
          v-model="formData.email"
          :class="{ error: errors.email }"
          @blur="validateField('email')"
        >
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="subject">Subject *</label>
        <input
          id="subject"
          type="text"
          v-model="formData.subject"
          :class="{ error: errors.subject }"
          @blur="validateField('subject')"
        >
        <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
      </div>

      <div class="form-group">
        <label for="message">Message *</label>
        <textarea
          id="message"
          v-model="formData.message"
          :class="{ error: errors.message }"
          rows="5"
          @blur="validateField('message')"
        ></textarea>
        <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
      </div>

      <BaseButton
        type="submit"
        variant="primary"
        size="large"
        :loading="isSubmitting"
        :disabled="!isFormValid"
        full-width
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </BaseButton>
    </form>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useFirebase } from '@/composables/useFirebase'
import { useVisitorTracking } from '@/composables/useVisitorTracking'
import { validateContactForm } from '@/utils/validators'

export default {
  name: 'ContactForm',
  components: {
    BaseButton
  },
  emits: ['success'],
  setup(props, { emit }) {
    const { submitContact } = useFirebase()
    const { trackInteraction } = useVisitorTracking()

    const formData = reactive({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })

    const errors = ref({})
    const isSubmitting = ref(false)

    const isFormValid = computed(() => {
      const validation = validateContactForm(formData)
      return validation.isValid && Object.keys(errors.value).length === 0
    })

    const validateField = (fieldName) => {
      const validation = validateContactForm({ [fieldName]: formData[fieldName] })
      if (validation.errors[fieldName]) {
        errors.value[fieldName] = validation.errors[fieldName]
      } else {
        delete errors.value[fieldName]
      }
    }

    const submitForm = async () => {
      // Validate entire form
      const validation = validateContactForm(formData)
      if (!validation.isValid) {
        errors.value = validation.errors
        return
      }

      isSubmitting.value = true

      try {
        trackInteraction('form_submit', 'contact_form')

        const result = await submitContact(formData)

        if (result.success) {
          // Reset form
          Object.keys(formData).forEach(key => {
            formData[key] = ''
          })
          errors.value = {}

          emit('success')
          trackInteraction('form_success', 'contact_form')
        } else {
          alert('There was an error sending your message. Please try again.')
          trackInteraction('form_error', 'contact_form', { error: result.error })
        }
      } catch (error) {
        alert('There was an error sending your message. Please try again.')
        console.error('Form submission error:', error)
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      formData,
      errors,
      isSubmitting,
      isFormValid,
      validateField,
      submitForm
    }
  }
}
</script>

<style scoped>
.contact-form-container {
  max-width: 500px;
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: white;
  font-size: 0.875rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #60A5FA;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #EF4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  color: #FCA5A5;
  font-size: 0.75rem;
  margin-top: -0.25rem;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>