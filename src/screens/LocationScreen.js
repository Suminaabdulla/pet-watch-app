// src/screens/LocationScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
  Text,
  Button,
  Card,
  ActivityIndicator
} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';


const LocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    setLoading(true);
    setError('');

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
        // For simplicity, we'll just show coordinates
        // In a real app, you'd use a reverse geocoding service
        setAddress(`${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`);
        setLoading(false);
      },
      (error) => {
        setError('Error getting location: ' + error.message);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  const openMapsSimulation = () => {
    if (location) {
      Alert.alert(
        'Maps Integration',
        `This would open maps with your location:\nLat: ${location.coords.latitude.toFixed(6)}\nLng: ${location.coords.longitude.toFixed(6)}\n\nIn a real app, this would integrate with Google Maps or Apple Maps.`,
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Your Location</Text>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator animating={true} size="large" />
          <Text style={styles.loadingText}>Getting your location...</Text>
        </View>
      )}

      {error && (
        <Card style={styles.errorCard}>
          <Card.Content>
            <Text style={styles.errorText}>{error}</Text>
            <Button mode="outlined" onPress={getCurrentLocation} style={styles.retryButton}>
              Try Again
            </Button>
          </Card.Content>
        </Card>
      )}

      {location && !loading && (
        <Card style={styles.locationCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.cardTitle}>Current Location</Text>
            <Text style={styles.coordinates}>
              Latitude: {location.coords.latitude.toFixed(6)}
            </Text>
            <Text style={styles.coordinates}>
              Longitude: {location.coords.longitude.toFixed(6)}
            </Text>
            <Text style={styles.coordinates}>
              Accuracy: ±{location.coords.accuracy.toFixed(0)}m
            </Text>

            {address && (
              <View style={styles.addressContainer}>
                <Text variant="titleMedium" style={styles.addressTitle}>Address:</Text>
                <Text style={styles.address}>{address}</Text>
              </View>
            )}
            
            <Button
              mode="contained"
              onPress={openMapsSimulation}
              style={styles.mapButton}
              icon="map"
            >
              Open in Maps (Simulated)
            </Button>
          </Card.Content>
        </Card>
      )}

      <Card style={styles.infoCard}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>Find Pets Near You</Text>
          <Text style={styles.infoText}>
            We use your location to show you pets available for adoption in your area.
            This helps you find your perfect companion nearby!
          </Text>
          <Text style={styles.infoText}>
            🏠 Dubai Marina - 5 pets available{'\n'}
            🏠 Downtown Dubai - 3 pets available{'\n'}
            🏠 Jumeirah - 8 pets available{'\n'}
            🏠 Business Bay - 2 pets available
          </Text>
        </Card.Content>
      </Card>

      <Button
        mode="outlined"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 32,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 14,
  },
  errorCard: {
    backgroundColor: '#FFEBEE',
    marginBottom: 16,
  },
  errorText: {
    color: '#D32F2F',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    borderColor: '#D32F2F',
  },
  locationCard: {
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  coordinates: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: 'monospace',
  },
  addressContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    lineHeight: 20,
  },
  mapButton: {
    marginTop: 16,
    backgroundColor: '#4ECDC4',
  },
  infoCard: {
    marginBottom: 16,
    backgroundColor: '#E3F2FD',
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  backButton: {
    marginTop: 16,
    borderColor: '#FF6B6B',
  },
});

export default LocationScreen;
