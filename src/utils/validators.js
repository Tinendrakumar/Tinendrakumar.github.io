// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const validateRequired = (value) => {
  return value !== undefined && value !== null && value.toString().trim().length > 0
}

export const validateMinLength = (value, minLength) => {
  return value && value.toString().length >= minLength
}

export const validateMaxLength = (value, maxLength) => {
  return !value || value.toString().length <= maxLength
}

export const validateContactForm = (formData) => {
  const errors = {}

  // First Name validation
  if (!validateRequired(formData.firstName)) {
    errors.firstName = 'First name is required'
  } else if (!validateMinLength(formData.firstName, 2)) {
    errors.firstName = 'First name must be at least 2 characters'
  } else if (!validateMaxLength(formData.firstName, 50)) {
    errors.firstName = 'First name must be less than 50 characters'
  }

  // Last Name validation
  if (!validateRequired(formData.lastName)) {
    errors.lastName = 'Last name is required'
  } else if (!validateMinLength(formData.lastName, 2)) {
    errors.lastName = 'Last name must be at least 2 characters'
  } else if (!validateMaxLength(formData.lastName, 50)) {
    errors.lastName = 'Last name must be less than 50 characters'
  }

  // Email validation
  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Subject validation
  if (!validateRequired(formData.subject)) {
    errors.subject = 'Subject is required'
  } else if (!validateMinLength(formData.subject, 5)) {
    errors.subject = 'Subject must be at least 5 characters'
  } else if (!validateMaxLength(formData.subject, 100)) {
    errors.subject = 'Subject must be less than 100 characters'
  }

  // Message validation
  if (!validateRequired(formData.message)) {
    errors.message = 'Message is required'
  } else if (!validateMinLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters'
  } else if (!validateMaxLength(formData.message, 1000)) {
    errors.message = 'Message must be less than 1000 characters'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input

  return input
    .trim()
    .replace(/[<>"']/g, '') // Remove potentially dangerous characters
    .substring(0, 1000) // Limit length
}

export const validatePassword = (password) => {
  const errors = []

  if (!password || password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}