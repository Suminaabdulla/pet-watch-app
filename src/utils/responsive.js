// src/utils/responsive.js
import { useWindowDimensions } from 'react-native';

export const useResponsiveDimensions = () => {
  const { width, height } = useWindowDimensions();

  return { width, height };
};
