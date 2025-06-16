import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ children, style }) => {
  return (
    <Text style={[styles.title, style]}>{children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
