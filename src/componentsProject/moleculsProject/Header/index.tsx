import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#020202',
  },
});