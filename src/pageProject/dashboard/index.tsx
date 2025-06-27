import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import Text from '../../componentsProject/atomsProject/Text';
import TextInput from '../../componentsProject/atomsProject/TextInput';
import QuoteBox from '../../componentsProject/moleculsProject/QuoteBox';
import MenuCard from '../../componentsProject/moleculsProject/MenuCard';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient colors={['#2196F3', '#2196F3']} style={styles.header}>
          <Text style={styles.welcome}>Welcome, User</Text>
          <Text style={styles.subtitle}>
            Let's start your daily with prepare the notes
          </Text>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#aaa"
            style={styles.search}
          />
          <QuoteBox
            date="Wednesday, 25 June 2025"
            quote="Focus on progress, not perfection"
            avatarSource={require('../../assetsProject/Avatar.png')}
          />
        </LinearGradient>

        <View style={styles.menu}>
          <View style={styles.cardRow}>
            <MenuCard title="Task" icon={require('../../assetsProject/IconTask.png')} /> 
            <MenuCard title="Expenses" icon={require('../../assetsProject/ExpenseIcon.png')} />
          </View>
          <View style={styles.cardRow}>
            <MenuCard title="Reminder" icon={require('../../assetsProject/ReminderIcon.png')} />
            <MenuCard title="Goals" icon={require('../../assetsProject/GoalsIcon.png')} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <Icon name="notifications-outline" size={24} />
        <Icon name="home" size={24} />
        <Icon name="person-outline" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingBottom: 60,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  welcome: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    color: '#fff',
    marginTop: -4,
    marginBottom: 12,
    fontSize: 14,
  },
  search: {
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    width: 350,
    height: 32,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: '#000',
  },
  menu: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default Dashboard;
