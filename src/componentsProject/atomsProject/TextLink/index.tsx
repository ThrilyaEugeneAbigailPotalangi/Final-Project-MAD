import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const TextLink = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.link}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  link: {
    color: '#339CFF',
    fontSize: 12,
    textAlign: 'right',
    marginBottom: 16,
  },
});

export default TextLink;
