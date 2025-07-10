// src/components/common/PetInfoSection.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Paragraph, Chip, Avatar } from 'react-native-paper';


const PetInfoSection = ({ pet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.name}>{pet.name}</Title>
        <Chip style={styles.priceChip} textStyle={styles.priceText}>
          AED {pet.adoptionFee}
        </Chip>
      </View>

      <Paragraph style={styles.breed}>
        {pet.breed} • {pet.age} • {pet.gender}
      </Paragraph>

      <View style={styles.locationContainer}>
        <Avatar.Icon size={24} icon="map-marker" style={styles.locationIcon} />
        <Paragraph style={styles.location}>{pet.location}</Paragraph>
      </View>

      <Paragraph style={styles.description}>{pet.description}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  priceChip: {
    backgroundColor: '#FF6B6B',
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  breed: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationIcon: {
    backgroundColor: '#4ECDC4',
    marginRight: 8,
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
});

export default PetInfoSection;
