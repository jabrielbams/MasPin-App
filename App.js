import 'react-native-gesture-handler';
import React, {useState} from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Import screens
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import HomeScreen from './src/screens/home';
import MainComponent from './src/navigation/MainComponent';

const Stack = createStackNavigator();

const App = () => {
  return <MainComponent />;
};

export default App;
