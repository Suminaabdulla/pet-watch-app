// src/components/common/AdoptButton.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const AdoptButton = ({ petName, onPress, style }) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Button
        mode="contained"
        onPress={onPress}
        style={styles.adoptButton}
        contentStyle={styles.adoptButtonContent}
        labelStyle={styles.adoptButtonLabel}
      >
        Adopt {petName} 🐾
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  adoptButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 25,
  },
  adoptButtonContent: {
    paddingVertical: 8,
  },
  adoptButtonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdoptButton;
