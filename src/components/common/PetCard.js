// src/components/common/PetCard.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Chip, Avatar } from 'react-native-paper';


const PetCard = ({ pet, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: pet.image }} style={styles.image} />
        <Card.Content style={styles.content}>
          <View style={styles.header}>
            <Title style={styles.name}>{pet.name}</Title>
            <Chip style={styles.priceChip} textStyle={styles.priceText}>
              AED {pet.price}
            </Chip>
          </View>
          
          <Paragraph style={styles.breed}>{pet.breed} • {pet.age}</Paragraph>
          
          <View style={styles.locationContainer}>
            <Avatar.Icon size={20} icon="map-marker" style={styles.locationIcon} />
            <Paragraph style={styles.location}>{pet.location}</Paragraph>
          </View>
          
          <Paragraph style={styles.description} numberOfLines={2}>
            {pet.description}
          </Paragraph>
          
          <View style={styles.tags}>
            {pet.vaccinated && (
              <Chip style={styles.tag} textStyle={styles.tagText}>
                Vaccinated
              </Chip>
            )}
            {pet.trained && (
              <Chip style={styles.tag} textStyle={styles.tagText}>
                Trained
              </Chip>
            )}
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  card: {
    elevation: 3,
    borderRadius: 12,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  priceChip: {
    backgroundColor: '#FF6B6B',
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold',
  },
  breed: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationIcon: {
    backgroundColor: '#4ECDC4',
    marginRight: 8,
  },
  location: {
    fontSize: 13,
    color: '#666',
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 8,
    marginBottom: 4,
    backgroundColor: '#E8F5E8',
  },
  tagText: {
    color: '#2E7D32',
    fontSize: 11,
  },
});

export default PetCard;
