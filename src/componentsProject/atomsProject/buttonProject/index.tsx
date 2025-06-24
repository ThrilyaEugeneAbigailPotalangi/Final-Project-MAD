import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, type = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, type === 'secondary' && styles.secondary]}
      onPress={onPress}
    >
      <Text style={[styles.text, type === 'secondary' && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#339CFF',
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
  },
  text: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  secondaryText: {
    color: '#000',
  },
});

export default Button;
