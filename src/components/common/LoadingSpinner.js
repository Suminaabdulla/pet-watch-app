// src/components/common/LoadingSpinner.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';


const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  message: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoadingSpinner;
