// src/screens/PetListScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { Searchbar, FAB, Snackbar } from 'react-native-paper';
import { useFetch } from '../hooks/useFetch';
import { fetchPets } from '../services/petApi';
import PetCard from '../components/common/PetCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';


const PetListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);


  const { data: pets, isLoading, error, refetch } = useFetch(fetchPets);

  const filteredPets = pets?.filter(pet =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.location.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const handlePetPress = (pet) => {
    navigation.navigate('PetDetail', { petId: pet.id });
  };

  if (isLoading) {
    return <LoadingSpinner message="Loading adorable pets..." />;
  }

  if (error) {
    return <ErrorMessage message="Failed to load pets" onRetry={refetch} />;
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search pets by name, breed, or location..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
        inputStyle={styles.searchInput}
      />
      
      <FlatList
        data={filteredPets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PetCard pet={item} onPress={() => handlePetPress(item)} />
        )}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        showsVerticalScrollIndicator={false}
      />

      <FAB
        style={styles.fab}
        icon="map-marker"
        onPress={() => navigation.navigate('Location')}
        label="My Location"
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Welcome to Pet Watch Dubai!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  searchbar: {
    margin: 16,
    elevation: 2,
  },
  searchInput: {
    fontSize: 14,
  },
  listContainer: {
    paddingBottom: 80,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default PetListScreen;
