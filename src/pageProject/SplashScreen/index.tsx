import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assetsProject/LogoProject.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>DailyTracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F9BFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
});
