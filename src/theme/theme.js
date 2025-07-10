// src/theme/theme.js
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    accent: '#4ECDC4',
    surface: '#FFFFFF',
    background: '#F8F9FA',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      ...DefaultTheme.fonts.regular,
      fontSize: 16
    },
    medium: {
      ...DefaultTheme.fonts.medium,
      fontSize: 20
    },
  },
};
