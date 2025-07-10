// src/hooks/usePaymentValidation.js
import { useState } from 'react';

export const usePaymentValidation = () => {
  const [errors, setErrors] = useState({});

  const validatePaymentForm = (paymentInfo) => {
    const newErrors = {};
    
    if (!paymentInfo.cardholderName.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
    }
    
    if (!paymentInfo.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (paymentInfo.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }
    
    if (!paymentInfo.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(paymentInfo.expiryDate)) {
      newErrors.expiryDate = 'Please enter date in MM/YY format';
    }
    
    if (!paymentInfo.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (paymentInfo.cvv.length < 3) {
      newErrors.cvv = 'Please enter a valid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const formatPaymentInput = (field, value) => {
    let formattedValue = value;
    
    // Format card number
    if (field === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    }
    
    // Format expiry date
    if (field === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5);
    }
    
    // Format CVV
    if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }

    return formattedValue;
  };

  return {
    errors,
    validatePaymentForm,
    clearError,
    formatPaymentInput,
  };
};
