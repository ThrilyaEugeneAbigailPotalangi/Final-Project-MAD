import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>

      <Image 
        style={styles.image} 
        source={require('./assets/foto1.jpg')} 
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D5451B',
    padding: 20,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#F4E7E1',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
  },
});
