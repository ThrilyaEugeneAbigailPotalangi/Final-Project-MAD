import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from '../../componentsProject/moleculsProject/TextInput';
import Button from '../../componentsProject/atomsProject/buttonProject';
import Gap from '../../componentsProject/atomsProject/Gap';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Sign Up</Text>
      <Text style={styles.heading}>Forgot Password?</Text>
      <Text style={styles.subtext}>
        Enter your email address to reset your password instruction
      </Text>

      <Gap height={32} />

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Enter your email" />

      <Gap height={24} />

      <Button title="Send link" onPress={() => console.log('Send link pressed')} />
    </View>
  );
};

export default ForgotPassword;

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
    color: '#000',
    marginTop: 12,
    textAlign: 'left',
  },
  subtext: {
    fontSize: 14,
    color: '#A9A9A9',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
    textAlign: 'left',
  },
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
    color: '#040404',
  },
});
