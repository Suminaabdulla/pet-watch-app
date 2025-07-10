// src/components/common/PetFeaturesSection.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Chip } from 'react-native-paper';


const PetFeaturesSection = ({ pet, title = "Features" }) => {
  const features = [
    { condition: pet.vaccinated, label: '✓ Vaccinated' },
    { condition: pet.trained, label: '✓ Trained' },
    { condition: true, label: '✓ Health Checked' },
    { condition: true, label: '✓ Microchipped' },
  ];

  return (
    <View style={styles.features}>
      <Text variant="titleLarge" style={styles.sectionTitle}>{title}</Text>
      <View style={styles.chipContainer}>
        {features.map((feature, index) => 
          feature.condition && (
            <Chip 
              key={index}
              style={styles.featureChip} 
              textStyle={styles.featureText}
            >
              {feature.label}
            </Chip>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  features: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  featureChip: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#E8F5E8',
  },
  featureText: {
    color: '#2E7D32',
    fontSize: 13,
  },
});

export default PetFeaturesSection;
