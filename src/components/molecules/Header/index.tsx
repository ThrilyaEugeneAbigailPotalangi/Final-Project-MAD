import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import profileImage from '../../../assets/pic.png';

const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.name}>{text}</Text>
        <Text style={styles.subtitle}>Have you track your money today?</Text>
      </View>
      <Image source={profileImage} style={styles.image} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    elevation: 2,
  },
  leftContent: {
    flex: 1,
    paddingRight: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 15,
    color: '#999',
    marginTop: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
