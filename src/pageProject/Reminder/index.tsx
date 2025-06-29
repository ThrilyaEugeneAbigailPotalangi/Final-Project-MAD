import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView,Image} from 'react-native';

export default function Reminder() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (s: number) => {
    const minutes = Math.floor(s / 60);
    const secs = s % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Stopwatch</Text>

      <View style={styles.timerContainer}>
        <Text style={styles.focusText}>Focus Timer</Text>

        <View style={styles.timerCircle}>
          <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => setIsRunning(true)}>
            <Image
              source={require('../../assetsProject/play-button-arrowhead.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsRunning(false)}>
            <Image
              source={require('../../assetsProject/pause.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleReset}>
            <Image
              source={require('../../assetsProject/undo.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginVertical: 20,
  },
  timerContainer: {
    flex: 1,
    backgroundColor: '#2DA5F3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  focusText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 24,
    marginBottom: 60,
    marginTop: 10,
  },
  timerCircle: {
    backgroundColor: '#F4E370',
    width: 211,
    height: 211,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  timerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 40,
    color: '#000',
  },
  controls: {
    flexDirection: 'row',
    gap: 30,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});
