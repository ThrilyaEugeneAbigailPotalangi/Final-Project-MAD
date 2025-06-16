import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Registration = () => {
  const [title, setTitle] = useState('Registration');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onSignIn = () => {
    setTitle('Selamat Datang, ' + username);
    console.log({username, name, email, address, phone});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        label='Name'
        placeholder="Masukan nama lengkap anda"
        onChangeText={e => setName(e)}
      />
      <TextInput
        label='Username'
        placeholder="Masukan username anda"
        onChangeText={e => setUsername(e)}
      />
      <TextInput
        label='Email'
        placeholder="Masukan Email anda"
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        label='Address'
        placeholder="Masukan alamat anda"
        onChangeText={e => setAddress(e)}
      />
      <TextInput
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        keyboardType="numeric"
        onlyNumbers={true}
        onChangeText={e => setPhone(e)}
/>
      <Button text="Register" onPress={onSignIn} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});