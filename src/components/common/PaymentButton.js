// src/components/common/PaymentButton.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const PaymentButton = ({ 
  onPress, 
  isProcessing, 
  amount, 
  processingText = 'Processing Payment...', 
  style 
}) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[styles.payButton, style]}
      contentStyle={styles.payButtonContent}
      loading={isProcessing}
      disabled={isProcessing}
    >
      {isProcessing ? processingText : `Pay AED ${amount}`}
    </Button>
  );
};

const styles = StyleSheet.create({
  payButton: {
    marginTop: 24,
    marginBottom: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
  },
  payButtonContent: {
    paddingVertical: 12,
  },
});

export default PaymentButton;
