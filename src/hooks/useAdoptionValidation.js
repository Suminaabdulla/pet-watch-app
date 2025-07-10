// src/hooks/useAdoptionValidation.js
import { useState } from 'react';

export const useAdoptionValidation = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (adoptionForm) => {
    const newErrors = {};
    
    if (!adoptionForm.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!adoptionForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(adoptionForm.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!adoptionForm.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!adoptionForm.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!adoptionForm.reason.trim()) {
      newErrors.reason = 'Please tell us why you want to adopt this pet';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  return {
    errors,
    validateForm,
    clearError,
  };
};
