import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Gap from '../../componentsProject/atomsProject/Gap';
import Button from '../../componentsProject/atomsProject/buttonProject';
import TextInput from '../../componentsProject/moleculsProject/TextInput';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Sign Up</Text>
      <Text style={styles.heading}>Registration</Text>

      <Gap height={24} />

      {/* Avatar bulat placeholder */}
      <View style={styles.avatar} />

      <Gap height={32} />

      <Text style={styles.label}>Full name</Text>
      <TextInput placeholder="Full name" />

      <Gap height={12} />

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Email" />

      <Gap height={12} />

      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="Password" secureTextEntry />

      <Gap height={20} />

      <Button title="Sign up" onPress={() => console.log('Sign up pressed')} />
      <Gap height={12} />
      <Button title="Sign in with Google" type="secondary" onPress={() => console.log('Google Sign in')} />

      <Gap height={24} />

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => console.log('Go to Sign In')}>
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
    textAlign: 'left',
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
