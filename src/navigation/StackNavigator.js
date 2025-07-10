// src/navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../theme';

// Screens
import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import AdoptionScreen from '../screens/AdoptionScreen';
import PaymentScreen from '../screens/PaymentScreen';
import LocationScreen from '../screens/LocationScreen';
import AdoptionSuccessScreen from '../screens/AdoptionSuccessScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PetList"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="PetList" 
        component={PetListScreen}
        options={{ title: 'Pet Watch Dubai' }}
      />
      <Stack.Screen 
        name="PetDetail" 
        component={PetDetailScreen}
        options={{ title: 'Pet Details' }}
      />
      <Stack.Screen 
        name="Adoption" 
        component={AdoptionScreen}
        options={{ title: 'Adoption Process' }}
      />
      <Stack.Screen 
        name="Payment" 
        component={PaymentScreen}
        options={{ title: 'Payment' }}
      />
      <Stack.Screen 
        name="Location" 
        component={LocationScreen}
        options={{ title: 'Your Location' }}
      />
      <Stack.Screen 
        name="AdoptionSuccess" 
        component={AdoptionSuccessScreen}
        options={{ title: 'Success!' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
