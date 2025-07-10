// src/components/common/PetImageHeader.js
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LoadingSpinner from './LoadingSpinner';

const PetImageHeader = ({ imageUri, altText = "Pet image" }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        onLoad={() => setImageLoading(false)}
        onError={() => setImageLoading(false)}
        accessibilityLabel={altText}
      />
      {imageLoading && (
        <View style={styles.imageLoading}>
          <LoadingSpinner message="Loading image..." />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  imageLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
});

export default PetImageHeader;
