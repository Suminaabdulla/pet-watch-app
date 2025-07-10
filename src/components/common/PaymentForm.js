// src/components/common/PaymentForm.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import FormInput from './FormInput';
import PaymentButton from './PaymentButton';


const PaymentForm = ({
  paymentInfo,
  errors,
  onInputChange,
  onSubmit,
  isProcessing,
  totalAmount,
  title = "Payment Details"
}) => {

  return (
    <View style={styles.form}>
      <Text variant="headlineSmall" style={styles.formTitle}>{title}</Text>
      
      <FormInput
        label="Cardholder Name *"
        value={paymentInfo.cardholderName}
        onChangeText={(text) => onInputChange('cardholderName', text)}
        error={!!errors.cardholderName}
        errorMessage={errors.cardholderName}
      />

      <FormInput
        label="Card Number *"
        value={paymentInfo.cardNumber}
        onChangeText={(text) => onInputChange('cardNumber', text)}
        error={!!errors.cardNumber}
        errorMessage={errors.cardNumber}
        keyboardType="numeric"
        maxLength={19}
      />

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <FormInput
            label="Expiry Date *"
            value={paymentInfo.expiryDate}
            onChangeText={(text) => onInputChange('expiryDate', text)}
            error={!!errors.expiryDate}
            errorMessage={errors.expiryDate}
            keyboardType="numeric"
            placeholder="MM/YY"
            maxLength={5}
          />
        </View>
        <View style={styles.halfInput}>
          <FormInput
            label="CVV *"
            value={paymentInfo.cvv}
            onChangeText={(text) => onInputChange('cvv', text)}
            error={!!errors.cvv}
            errorMessage={errors.cvv}
            keyboardType="numeric"
            maxLength={4}
            secureTextEntry
          />
        </View>
      </View>

      <PaymentButton
        onPress={onSubmit}
        isProcessing={isProcessing}
        amount={totalAmount}
      />
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
});

export default PaymentForm;
