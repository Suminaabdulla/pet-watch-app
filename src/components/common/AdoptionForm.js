// src/components/common/AdoptionForm.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';
import FormInput from './FormInput';


const AdoptionForm = ({
  adoptionForm,
  errors,
  onInputChange,
  onSubmit,
  isSubmitting,
  title = "Adoption Application"
}) => {

  return (
    <View style={styles.form}>
      <Title style={styles.formTitle}>{title}</Title>
      
      <FormInput
        label="Full Name *"
        value={adoptionForm.fullName}
        onChangeText={(text) => onInputChange('fullName', text)}
        error={!!errors.fullName}
        errorMessage={errors.fullName}
      />

      <FormInput
        label="Email Address *"
        value={adoptionForm.email}
        onChangeText={(text) => onInputChange('email', text)}
        error={!!errors.email}
        errorMessage={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormInput
        label="Phone Number *"
        value={adoptionForm.phone}
        onChangeText={(text) => onInputChange('phone', text)}
        error={!!errors.phone}
        errorMessage={errors.phone}
        keyboardType="phone-pad"
      />

      <FormInput
        label="Address *"
        value={adoptionForm.address}
        onChangeText={(text) => onInputChange('address', text)}
        error={!!errors.address}
        errorMessage={errors.address}
        multiline
        numberOfLines={3}
      />

      <FormInput
        label="Previous Pet Experience"
        value={adoptionForm.experience}
        onChangeText={(text) => onInputChange('experience', text)}
        multiline
        numberOfLines={3}
        placeholder="Tell us about your experience with pets..."
      />

      <FormInput
        label="Why do you want to adopt this pet? *"
        value={adoptionForm.reason}
        onChangeText={(text) => onInputChange('reason', text)}
        error={!!errors.reason}
        errorMessage={errors.reason}
        multiline
        numberOfLines={4}
      />

      <Button
        mode="contained"
        onPress={onSubmit}
        style={styles.submitButton}
        contentStyle={styles.submitButtonContent}
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Processing...' : 'Continue to Payment'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 16,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 24,
    marginBottom: 16,
    backgroundColor: '#FF6B6B',
    borderRadius: 25,
  },
  submitButtonContent: {
    paddingVertical: 8,
  },
});

export default AdoptionForm;
