// src/components/common/PetDetailsCard.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Title, Card, List } from 'react-native-paper';


const PetDetailsCard = ({ pet, title = "Pet Details" }) => {
  return (
    <Card style={styles.detailsCard}>
      <Card.Content>
        <Title style={styles.sectionTitle}>{title}</Title>
        
        <List.Item
          title="Weight"
          description={pet.weight}
          left={props => <List.Icon {...props} icon="weight" />}
        />
        
        <List.Item
          title="Color"
          description={pet.color}
          left={props => <List.Icon {...props} icon="palette" />}
        />
        
        <List.Item
          title="Vaccinated"
          description={pet.vaccinated ? 'Yes' : 'No'}
          left={props => <List.Icon {...props} icon="medical-bag" />}
        />
        
        <List.Item
          title="Trained"
          description={pet.trained ? 'Yes' : 'No'}
          left={props => <List.Icon {...props} icon="school" />}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  detailsCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default PetDetailsCard;
