import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, secureTextEntry = false, value, onChangeText }) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 45,
    width: 320,
  },
});

export default TextInput;
