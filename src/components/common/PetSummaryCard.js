// src/components/common/PetSummaryCard.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Title, Paragraph, Card } from 'react-native-paper';


const PetSummaryCard = ({ selectedPet, title = "Adopting" }) => {
  return (
    <Card style={styles.petCard}>
      <Card.Content style={styles.petInfo}>
        <Title>{title}: {selectedPet.name}</Title>
        <Paragraph>Breed: {selectedPet.breed}</Paragraph>
        <Paragraph>Adoption Fee: AED {selectedPet.adoptionFee}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  petCard: {
    margin: 16,
    elevation: 2,
  },
  petInfo: {
    paddingVertical: 16,
  },
});

export default PetSummaryCard;
