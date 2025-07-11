// src/utils/permissions.js
import { Platform, Alert, Linking } from 'react-native';
import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const LOCATION_PERMISSION = Platform.OS === 'ios' 
  ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE 
  : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const checkLocationPermission = async () => {
  try {
    const result = await check(LOCATION_PERMISSION);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.error('Error checking location permission:', error);
    return false;
  }
};

export const requestLocationPermission = async () => {
  try {
    const result = await request(LOCATION_PERMISSION);
    
    switch (result) {
      case RESULTS.GRANTED:
        return { granted: true, message: 'Permission granted' };
      case RESULTS.DENIED:
        return { 
          granted: false, 
          message: 'Location permission denied. Please enable location access in settings.',
          canRetry: true
        };
      case RESULTS.BLOCKED:
        return { 
          granted: false, 
          message: 'Location access is blocked. Please enable it in your device settings.',
          canRetry: false,
          showSettings: true
        };
      case RESULTS.UNAVAILABLE:
        return { 
          granted: false, 
          message: 'Location services are not available on this device.',
          canRetry: false
        };
      default:
        return { 
          granted: false, 
          message: 'Unknown permission result.',
          canRetry: true
        };
    }
  } catch (error) {
    console.error('Permission request error:', error);
    return { 
      granted: false, 
      message: 'Failed to request location permission.',
      canRetry: true
    };
  }
};

export const showLocationPermissionAlert = (permissionResult) => {
  if (permissionResult.showSettings) {
    Alert.alert(
      'Location Permission Required',
      'Location access is blocked. Please enable it in your device settings to find pets near you.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Open Settings', onPress: () => Linking.openSettings() }
      ]
    );
  } else {
    Alert.alert(
      'Location Permission',
      permissionResult.message,
      [{ text: 'OK' }]
    );
  }
};

export const getLocationErrorMessage = (error) => {
  switch (error.code) {
    case 1: // PERMISSION_DENIED
      return 'Location permission denied. Please enable location access in your device settings.';
    case 2: // POSITION_UNAVAILABLE
      return 'Location unavailable. Please check your GPS settings and try again.';
    case 3: // TIMEOUT
      return 'Location request timed out. Please try again.';
    default:
      return `Location error: ${error.message}`;
  }
};
