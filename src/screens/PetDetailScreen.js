// src/screens/PetDetailScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { useFetch } from '../hooks/useFetch';
import { fetchPetById } from '../services/petApi';
import { useAdoptionContext } from '../contexts/AdoptionContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import PetImageHeader from '../components/common/PetImageHeader';
import PetInfoSection from '../components/common/PetInfoSection';
import PetDetailsCard from '../components/common/PetDetailsCard';
import PetFeaturesSection from '../components/common/PetFeaturesSection';
import AdoptButton from '../components/common/AdoptButton';


const PetDetailScreen = ({ route, navigation }) => {
  const { petId } = route.params;
  const { updateAdoptionData } = useAdoptionContext();


  const { data: pet, isLoading, error } = useFetch(() => fetchPetById(petId), [petId]);

  const handleAdoptPress = () => {
    updateAdoptionData({ selectedPet: pet });
    navigation.navigate('Adoption');
  };

  if (isLoading) {
    return <LoadingSpinner message="Loading pet details..." />;
  }

  if (error || !pet) {
    return <ErrorMessage message="Failed to load pet details" onRetry={() => navigation.goBack()} />;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <PetImageHeader
        imageUri={pet.image}
        altText={`${pet.name} - ${pet.breed}`}
      />

      <PetInfoSection pet={pet} />

      <Divider style={styles.divider} />

      <PetDetailsCard pet={pet} />

      <PetFeaturesSection pet={pet} />

      <AdoptButton
        petName={pet.name}
        onPress={handleAdoptPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  divider: {
    marginVertical: 16,
  },
});

export default PetDetailScreen;
