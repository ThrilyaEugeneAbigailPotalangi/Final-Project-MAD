import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; 

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding2');
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigation]);

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
