import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Gap from '../../componentsProject/atomsProject/Gap';
import Button from '../../componentsProject/atomsProject/buttonProject';
import TextInput from '../../componentsProject/moleculsProject/TextInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    
    navigation.navigate('Dashboard', { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Sign Up</Text>
      <Text style={styles.heading}>Registration</Text>

      <Gap height={24} />
      <View style={styles.avatar} />

      <Gap height={32} />

      <Text style={styles.label}>Full name</Text>
      <TextInput placeholder="Full name" value={username} onChangeText={setUsername} />

      <Gap height={12} />

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

      <Gap height={12} />

      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <Gap height={20} />

      <Button title="Sign up" onPress={handleSignUp} />
      <Gap height={12} />
      <Button title="Sign in with Google" type="secondary" onPress={() => {}} />

      <Gap height={24} />

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFC',
    padding: 24,
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: '#000',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginTop: 12,
    textAlign: 'center',
    color: '#000',
  },
  avatar: {
    alignSelf: 'center',
    width: 119,
    height: 119,
    backgroundColor: '#D9D9D9',
    borderRadius: 119 / 2,
  },
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
    color: '#040404',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    fontFamily: 'Poppins-Medium',
  },
  linkText: {
    color: '#0F62B0',
    fontWeight: 'bold',
  },
});
