// src/hooks/useLocation.js
import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCurrentLocation = async () => {
    setLoading(true);
    setError('');

    try {
      // Get current location using React Native Geolocation
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
          // For demo purposes, set a mock address
          setAddress('Dubai Marina, Dubai, UAE');
          setLoading(false);
        },
        (error) => {
          setError('Failed to get location. Please try again.');
          console.error('Location error:', error);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );
    } catch (err) {
      setError('Failed to get location. Please try again.');
      console.error('Location error:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    location,
    address,
    loading,
    error,
    getCurrentLocation,
  };
};
