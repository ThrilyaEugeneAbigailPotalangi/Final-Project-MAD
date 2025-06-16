import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require('./assets/logounklab.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'left', 
    alignItems: 'center', 
  },
  container: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Image: {
    height: 90,
    width: 400,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  blackBox: {
    height: 80,
    width: 80,
    margin: 20,
    backgroundColor: 'black',
  },
  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
  },
});