import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to{"\n"}<Text style={styles.bold}>Daily Tracking</Text></Text>
      <Text style={styles.subtitle}>
        Let’s start organizing your day and stay on{"\n"}
        track - one task, one goal, one step at a time
      </Text>
      
      <Image
        source={require('../../assetsProject/Onboard2.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>

      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2DA5F3', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    opacity: 0.4,
  },
  activeDot: {
    opacity: 1,
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  skipText: {
    color: '#fff',
    fontWeight: '500',
  },
});
