import React from 'react';
import { View, Text, TextInput as RTextInput, StyleSheet } from 'react-native';

const TextInput = ({
  label = '',
  placeholder = '',
  keyboardType = 'default',
  secureTextEntry = false,
  onlyNumbers = false,
  onChangeText,
  ...rest
}) => {
  const handleChange = (text) => {
    let processedText = text;
    if (onlyNumbers) {
      processedText = text.replace(/[^0-9]/g, '');
    }
    if (onChangeText) {
      onChangeText(processedText);
    }
  };

  return (
    <View style={styles.inputGroup}>
      {label !== '' && <Text style={styles.label}>{label}</Text>}
      <RTextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        onChangeText={handleChange}
        {...rest}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: 'black',
    marginBottom: 6,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 14,
    fontSize: 16,
    color: 'black',
  },
})