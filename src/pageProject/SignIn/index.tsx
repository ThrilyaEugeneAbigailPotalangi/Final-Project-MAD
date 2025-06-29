import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Gap from '../../componentsProject/atomsProject/Gap';
import Button from '../../componentsProject/atomsProject/buttonProject';
import TextInput from '../../componentsProject/moleculsProject/TextInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('Dashboard', {username: username});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Let’s you sign in</Text>
      <Text style={styles.desc}>Manage your daily tasks easily</Text>

      <Gap height={32} />

      <Text style={styles.label}>Username</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />

      <Gap height={12} />

      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />

      <Gap height={8} />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
         <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>


      <Gap height={16} />

      <Button title="Sign In" onPress={handleSignIn}/>
      <Gap height={12} />
      <Button title="Sign In with Google" type="secondary" onPress={() => {}} />

      <Gap height={20} />

      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>Create one</Text>
      </Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
  fontSize: 20,
  fontFamily: 'Poppins-Medium',
  textAlign: 'center',
  marginBottom: 60,
  marginTop: -30,
},
  subtitle: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginTop: 4,

  },
  desc: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#D0C7C7',
    textAlign: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
    color: '#040404',
  },
  forgot: {
    color: '#0F62B0',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlign: 'left',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    fontFamily: 'Poppins-Medium',
  },
  linkText: {
    color: '#0F62B0',
  },
});
