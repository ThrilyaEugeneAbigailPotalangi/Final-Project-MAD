import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../../components/atoms';
import { Header } from '../../components/molecules';
import BalanceCard from '../../components/molecules/BalanceContent';

const HomeScreen = () => {
  return (
    <View style={styles.pageContainer}>
      <Header text="Hi, Thrilya!" />
      <Gap height={24} />

     
      <BalanceCard />

      <Gap height={32} />
      <Text style={styles.transactionTitle}>Add Transaction</Text>
      <Gap height={12} />
      <Button text="Cash On Hand" />
      <Gap height={16} />
      <Button text="Cash On Bank" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#00C897',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
