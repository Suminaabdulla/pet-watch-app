// App.js
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Navigation
import StackNavigator from './src/navigation/StackNavigator';

// Theme
import { theme } from './src/theme';

// Context
import { AdoptionProvider } from './src/contexts/AdoptionContext';

// Configure the theme with icon provider
const themeWithIcons = {
  ...theme,
  icons: {
    provider: MaterialCommunityIcons,
  },
};

export default function App() {
  return (
    <PaperProvider theme={themeWithIcons}>
      <AdoptionProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
          <StackNavigator />
        </NavigationContainer>
      </AdoptionProvider>
    </PaperProvider>
  );
}
