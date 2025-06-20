import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalanceCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Balance</Text>
      <Text style={styles.total}>Rp. 10.000.000</Text>

      <View style={styles.line} />

      <View style={styles.row}>
        <Text style={styles.label}>Cash on Hand</Text>
        <Text style={styles.value}>Rp. 4.000.000</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cash on Bank</Text>
        <Text style={styles.value}>Rp. 6.000.000</Text>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    elevation: 1,
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: 8,
  },
  total: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    alignContent: 'center',
    color: '#000',
    marginBottom: 12,
  },
  line: {
    height: 1,
    backgroundColor: '#D3D3D3',
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Medium'
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Medium'
  },
});
