import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Username</Text>
      </View>

      <Text style={styles.sectionTitle}>Account Info</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter username" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" keyboardType="email-address" />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F5',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: '#D9D9D9',
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
  },
  sectionTitle: {
    fontSize: 23,
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4,
    color: '#333',
  },
  input: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#F4E370',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  logoutText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000',
  },
});
