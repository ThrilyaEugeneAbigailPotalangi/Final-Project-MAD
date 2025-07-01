import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

import './src/config/FirebaseProject'; 

import SplashScreen from './src/pageProject/SplashScreen';
import SignIn from './src/pageProject/SignIn';
import SignUp from './src/pageProject/SignUp';
import ForgotPassword from './src/pageProject/ForgotPass';
import OnBoarding1 from './src/pageProject/onBoarding1';
import OnBoarding2 from './src/pageProject/OnBoarding2';
import Dashboard from './src/pageProject/dashboard';
import CreateTask from './src/pageProject/CreateTask';
import CreateExpenses from './src/pageProject/CreateExpenses';
import Goals from './src/pageProject/Goals';
import Reminder from './src/pageProject/Reminder';
import Profile from './src/pageProject/Profile';

export type RootStackParamList = {
  SplashScreen: undefined;
  OnBoarding1: undefined;
  OnBoarding2: undefined;
  ForgotPassword: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: { username: string };
  CreateTask: undefined;
  CreateExpenses: undefined;
  Goals: undefined;
  Reminder: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="CreateExpenses" component={CreateExpenses} />
        <Stack.Screen name="Goals" component={Goals} />
        <Stack.Screen name="Reminder" component={Reminder} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
