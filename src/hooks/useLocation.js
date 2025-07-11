// src/hooks/useLocation.js
import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  requestLocationPermission,
  showLocationPermissionAlert,
  getLocationErrorMessage
} from '../utils/permissions';

export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLocationPermission = async () => {
    const permissionResult = await requestLocationPermission();

    if (!permissionResult.granted) {
      setError(permissionResult.message);
      if (permissionResult.showSettings) {
        showLocationPermissionAlert(permissionResult);
      }
    }

    return permissionResult.granted;
  };

  const getCurrentLocation = async () => {
    setLoading(true);
    setError('');

    try {
      // First, request location permission
      const hasPermission = await handleLocationPermission();

      if (!hasPermission) {
        setLoading(false);
        return;
      }

      // Get current location using React Native Geolocation
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
          // For demo purposes, set a mock address
          setAddress('Dubai Marina, Dubai, UAE');
          setLoading(false);
        },
        (locationError) => {
          const errorMessage = getLocationErrorMessage(locationError);
          setError(errorMessage);
          console.error('Location error:', locationError);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    location,
    address,
    loading,
    error,
    getCurrentLocation,
  };
};
