import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* Title */}
        <Text style={styles.title}>
          Stay Organized{'\n'}stay Productive
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Easily manage your daily tasks{'\n'}and boost your productivity
        </Text>

        {/* Gambar */}
        <Image
          source={require('../../assetsProject/LogoBoard1.png')} 
          style={styles.image}
          resizeMode="contain"
        />

        {/* Indicator */}
        <View style={styles.indicatorWrapper}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Skip Button */}
        <TouchableOpacity onPress={() => console.log('Skip pressed')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E86FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 32,
  },
  image: {
    width: 280,
    height: 220,
    marginBottom: 32,
  },
  indicatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    opacity: 0.3,
    marginHorizontal: 4,
  },
  activeDot: {
    opacity: 1,
  },
  skipText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
});
