import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    
    console.log('Username:', Username);
    console.log('Password:', password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Text style={styles.Title}>Welcome</Text>

     <Text style={styles.label}>Username</Text>
     <TextInput
        style={styles.input}
        placeholder="Masukan username anda"
        value={Username}
        onChangeText={setUsername}
    />
    <Text style={styles.label}>Password</Text>
     <TextInput
     style={styles.input}
     placeholder='Masukan password anda'
     value={password}
     onChangeText={setPassword}
     />

     <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
     </TouchableOpacity>

    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  Title: {
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 40,
    fontWeight: 'bold'
  },
  TitleText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 40,
    color: '#00000',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 25,
  },
  input: {
    height: 50, //atur tinggi border
    borderColor: 'black',
    borderWidth: 1, //atur ketebelan border
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FF7601', //warna baground
    padding: 10, //atur ukuran button
    borderRadius: 10, //atur lengkungan sudut button
    marginTop: 30, //untuk atur jarak button atas
    alignItems: 'center', //atur posisi teks
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',

  },
});