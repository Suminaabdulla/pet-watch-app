// src/components/common/FormInput.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';


const FormInput = ({
  label,
  value,
  onChangeText,
  error,
  errorMessage,
  style,
  multiline = false,
  numberOfLines = 1,
  keyboardType = 'default',
  maxLength,
  placeholder,
  secureTextEntry = false,
  autoCapitalize = 'sentences',
  enforceEnglish = true,
  ...props
}) => {

  // Function to filter out non-English characters
  const handleTextChange = (text) => {
    if (enforceEnglish) {
      // Allow only English letters, numbers, spaces, and common punctuation
      const englishOnlyText = text.replace(/[^\x00-\x7F]/g, '');
      onChangeText(englishOnlyText);
    } else {
      onChangeText(text);
    }
  };
  return (
    <View>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        style={[styles.input, style]}
        error={error}
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        {...props}
      />
      <HelperText type="error" visible={error}>
        {errorMessage}
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
  },
});

export default FormInput;
