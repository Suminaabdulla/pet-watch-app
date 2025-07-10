// src/screens/PaymentScreen.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { useAdoptionContext } from '../contexts/AdoptionContext';
import { usePaymentValidation } from '../hooks/usePaymentValidation';
import PaymentSummaryCard from '../components/common/PaymentSummaryCard';
import PaymentForm from '../components/common/PaymentForm';


const PaymentScreen = ({ navigation }) => {
  const { adoptionData, updateAdoptionData } = useAdoptionContext();
  const { errors, validatePaymentForm, clearError, formatPaymentInput } = usePaymentValidation();
  const [isProcessing, setIsProcessing] = useState(false);

  const { selectedPet, paymentInfo } = adoptionData;
  const processingFee = 25;

  const handleInputChange = (field, value) => {
    const formattedValue = formatPaymentInput(field, value);

    updateAdoptionData({
      paymentInfo: {
        ...paymentInfo,
        [field]: formattedValue,
      },
    });

    clearError(field);
  };

  const handlePayment = async () => {
    if (!validatePaymentForm(paymentInfo)) {
      Alert.alert('Error', 'Please fill in all payment details correctly');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigation.navigate('AdoptionSuccess');
    }, 3000);
  };

  if (!selectedPet) {
    navigation.navigate('PetList');
    return null;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <PaymentSummaryCard
        selectedPet={selectedPet}
        processingFee={processingFee}
      />

      <PaymentForm
        paymentInfo={paymentInfo}
        errors={errors}
        onInputChange={handleInputChange}
        onSubmit={handlePayment}
        isProcessing={isProcessing}
        totalAmount={selectedPet.adoptionFee + processingFee}
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

export default PaymentScreen;
