import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function GoalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goals</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Goal title</Text>
        <TextInput style={styles.input} placeholder="Enter title" />

        <Text style={styles.label}>Target Date</Text>
        <TextInput style={styles.input} placeholder="Target date" />

        <Text style={styles.label}>Goal type</Text>
        <TextInput style={styles.input} placeholder="Goal type" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Goals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 32,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  formContainer: {
    backgroundColor: '#2DA5F3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    flex: 1,
    width: '100%',
    position: 'absolute',
    top: 100,
    bottom: 0,
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    color: '#ffffff',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  notesInput: {
    fontFamily: 'Poppins-Regular',
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#F4E370',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 16,
  },
});
