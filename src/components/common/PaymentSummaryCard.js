// src/components/common/PaymentSummaryCard.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Divider } from 'react-native-paper';


const PaymentSummaryCard = ({ selectedPet, processingFee = 25 }) => {
  const total = selectedPet.adoptionFee + processingFee;

  return (
    <Card style={styles.summaryCard}>
      <Card.Content>
        <Text variant="titleLarge">Payment Summary</Text>
        <Divider style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text>Pet: {selectedPet.name}</Text>
          <Text style={styles.amount}>AED {selectedPet.adoptionFee}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text>Processing Fee:</Text>
          <Text style={styles.amount}>AED {processingFee}</Text>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text variant="titleMedium" style={styles.total}>Total:</Text>
          <Text variant="titleMedium" style={styles.totalAmount}>AED {total}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  summaryCard: {
    margin: 16,
    elevation: 2,
  },
  divider: {
    marginVertical: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  amount: {
    fontWeight: 'bold',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
});

export default PaymentSummaryCard;
