// src/pageProject/ForgotPassword.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from '../../componentsProject/moleculsProject/TextInput';
import Button from '../../componentsProject/atomsProject/buttonProject';
import Gap from '../../componentsProject/atomsProject/Gap';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPassword = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    
    alert(`Password reset link sent to ${email}`);
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Gap height={24} />
      <Text style={styles.label}>Enter your email address</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Gap height={20} />
      <Button title="Reset Password" onPress={handleReset} />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
  },
});
