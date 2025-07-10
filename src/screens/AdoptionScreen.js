// src/screens/AdoptionScreen.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { useAdoptionContext } from '../contexts/AdoptionContext';
import { useAdoptionValidation } from '../hooks/useAdoptionValidation';
import PetSummaryCard from '../components/common/PetSummaryCard';
import AdoptionForm from '../components/common/AdoptionForm';

const AdoptionScreen = ({ navigation }) => {
  const { adoptionData, updateAdoptionData } = useAdoptionContext();
  const { errors, validateForm, clearError } = useAdoptionValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { selectedPet, adoptionForm } = adoptionData;

  const handleInputChange = (field, value) => {
    updateAdoptionData({
      adoptionForm: {
        ...adoptionForm,
        [field]: value,
      },
    });

    clearError(field);
  };

  const handleSubmit = async () => {
    if (!validateForm(adoptionForm)) {
      Alert.alert('Error', 'Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigation.navigate('Payment');
    }, 1500);
  };

  if (!selectedPet) {
    navigation.goBack();
    return null;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <PetSummaryCard selectedPet={selectedPet} />

      <AdoptionForm
        adoptionForm={adoptionForm}
        errors={errors}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
});

export default AdoptionScreen;
