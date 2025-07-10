// src/screens/AdoptionSuccessScreen.js
import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import {
  Text,
  Button,
  Card,
  Avatar
} from 'react-native-paper';
import { useAdoptionContext } from '../contexts/AdoptionContext';


const AdoptionSuccessScreen = ({ navigation }) => {
  const { adoptionData, resetAdoptionData } = useAdoptionContext();
  const { selectedPet } = adoptionData;

  const handleFinish = useCallback(() => {
    resetAdoptionData();
    navigation.navigate('PetList');
  }, [resetAdoptionData, navigation]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleFinish();
      return true;
    });

    return () => backHandler.remove();
  }, [handleFinish]);

  if (!selectedPet) {
    navigation.navigate('PetList');
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Avatar.Icon size={80} icon="check-circle" style={styles.successIcon} />
      </View>

      <Text variant="headlineMedium" style={styles.title}>Congratulations! 🎉</Text>

      <Card style={styles.successCard}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>Adoption Successful!</Text>
          <Text style={styles.message}>
            Thank you for choosing to adopt {selectedPet.name}!
            Your new furry friend will be ready for pickup within 24-48 hours.
          </Text>

          <View style={styles.nextSteps}>
            <Text variant="titleMedium" style={styles.stepsTitle}>Next Steps:</Text>
            <Text style={styles.step}>
              ✅ Payment confirmed - AED {selectedPet.adoptionFee + 25}
            </Text>
            <Text style={styles.step}>
              📧 Confirmation email sent to your registered email
            </Text>
            <Text style={styles.step}>
              📞 Our team will contact you within 24 hours
            </Text>
            <Text style={styles.step}>
              🏠 Prepare your home for {selectedPet.name}
            </Text>
            <Text style={styles.step}>
              💝 Start your new journey together!
            </Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.contactCard}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>Contact Information</Text>
          <Text style={styles.contact}>
            📧 Email: adopt@petwatchdubai.com
          </Text>
          <Text style={styles.contact}>
            📞 Phone: +971 4 XXX XXXX
          </Text>
          <Text style={styles.contact}>
            📍 Address: Dubai Marina, UAE
          </Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={handleFinish}
        style={styles.finishButton}
        contentStyle={styles.finishButtonContent}
      >
        Back to Pet List
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  successIcon: {
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#4CAF50',
  },
  successCard: {
    marginBottom: 16,
    elevation: 2,
    backgroundColor: '#E8F5E8',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  nextSteps: {
    marginTop: 16,
  },
  stepsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  step: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 6,
  },
  contactCard: {
    marginBottom: 24,
    elevation: 2,
  },
  contact: {
    fontSize: 14,
    marginBottom: 4,
  },
  finishButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 25,
  },
  finishButtonContent: {
    paddingVertical: 12,
  },
});

export default AdoptionSuccessScreen;
