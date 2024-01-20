/* eslint-disable react/no-unstable-nested-components */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  IconHomeActive,
  IconHomeDisable,
  IconListActive,
  IconListDisable,
  IconProfileActive,
  IconProfileDisable,
  IconReportActive,
  IconReportDisable,
} from '../assets/icons';
import {FontSize, Fonts} from '../constants';

// Screens
import HomeScreen from '../screens/home';
import ActivityScreen from '../screens/aktivitas';
import ProfileScreen from '../screens/profile';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import TaxScreen from '../screens/tax';
import DetailTax from '../screens/tax/detail-tax';
import HargaPangan from '../screens/hargaPangan';
import RuteBus from '../screens/ruteBus';
import DetailLaporan from '../screens/detailLaporan';
import DetailInfoTax from '../screens/tax/detail-info-tax';
import DetailRuteBus from '../screens/ruteBus/detailRuteBus';

// Screens Name
const homeName = 'Beranda';
const activityName = 'Aktivitas';
const reportName = 'Laporan';
const profileName = 'Profil';

// Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let rn = route.name;

          if (rn === homeName) {
            if (focused) {
              return <IconHomeActive />;
            } else {
              return <IconHomeDisable />;
            }
          } else if (rn === activityName) {
            if (focused) {
              return <IconListActive />;
            } else {
              return <IconListDisable />;
            }
          } else if (rn === reportName) {
            if (focused) {
              return <IconReportActive />;
            } else {
              return <IconReportDisable />;
            }
          } else if (rn === profileName) {
            if (focused) {
              return <IconProfileActive />;
            } else {
              return <IconProfileDisable />;
            }
          }
        },
        tabBarLabelStyle: {
          fontSize: FontSize.dp_10,
          fontFamily: Fonts.SEMIBOLD,
        },
        tabBarStyle: {
          height: 65,
          paddingTop: 5,
          paddingBottom: 5,
          elevation: 3,
        },
      })}>
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={activityName}
        component={ActivityScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={reportName}
        component={ReportForm}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const MainComponent = () => {
  const [initialRoute, setInitialRoute] = useState('Login');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        return !!refreshToken; // Returns true if refreshToken exists, false otherwise
      } catch (error) {
        console.error('Error checking login status:', error.message);
        return false;
      }
    };

    // Determine the initial route based on login status
    const determineInitialRoute = async () => {
      const isLoggedIn = await checkLoggedIn();
      setInitialRoute(isLoggedIn ? 'Home' : 'Login');
      setIsReady(true);
    };

    determineInitialRoute();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (!isReady) {
    // Return a loading indicator or null while determining the initial route
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        {/* navbar */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Report"
          component={ReportForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReportIndex"
          component={ReportIndex}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtherFeatures"
          component={OtherFeatures}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Telephone"
          component={EmergencyContact}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{headerShown: false}}
        />
        {/* feature */}
        <Stack.Screen
          name="Tax"
          component={TaxScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bus"
          component={RuteBus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HargaPangan"
          component={HargaPangan}
          options={{headerShown: false}}
        />
        {/* details */}
        <Stack.Screen
          name="DetailTax"
          component={DetailTax}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailLaporan"
          component={DetailLaporan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailInfoTax"
          component={DetailInfoTax}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailRuteBus"
          component={DetailRuteBus}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainComponent;
