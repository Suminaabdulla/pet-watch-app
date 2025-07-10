// src/contexts/AdoptionContext.js
import React, { createContext, useContext, useState } from 'react';

const AdoptionContext = createContext();

export const AdoptionProvider = ({ children }) => {
  const [adoptionData, setAdoptionData] = useState({
    selectedPet: null,
    adoptionForm: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      experience: '',
      reason: '',
    },
    paymentInfo: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
    },
  });

  const updateAdoptionData = (data) => {
    setAdoptionData(prev => ({
      ...prev,
      ...data,
    }));
  };

  const resetAdoptionData = () => {
    setAdoptionData({
      selectedPet: null,
      adoptionForm: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        reason: '',
      },
      paymentInfo: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
      },
    });
  };

  return (
    <AdoptionContext.Provider value={{
      adoptionData,
      updateAdoptionData,
      resetAdoptionData,
    }}>
      {children}
    </AdoptionContext.Provider>
  );
};

export const useAdoptionContext = () => {
  const context = useContext(AdoptionContext);
  if (!context) {
    throw new Error('useAdoptionContext must be used within an AdoptionProvider');
  }
  return context;
};
