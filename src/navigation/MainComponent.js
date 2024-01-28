/* eslint-disable react/no-unstable-nested-components */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import HargaPangan from '../screens/market';
import RuteBus from '../screens/ruteBus';
import DetailLaporan from '../screens/detailLaporan';
import DetailInfoTax from '../screens/tax/detail-info-tax';
import DetailRuteBus from '../screens/ruteBus/detailRuteBus';
import ReportForm from '../screens/report/create';
import ReportIndex from '../screens/report';
import EmergencyContact from '../screens/telephone';
import ValidationAccount from '../screens/verification';
import DetailMarket from '../screens/market/detailMarket';
import {getUserProfile} from '../services/profile';
import {ModalPopup, TabBarButton} from '../components';
import NewsIndex from '../screens/news';
import OtherFeatures from '../screens/Other';

// Screens Name
const homeName = 'Beranda';
const activityName = 'Aktivitas';
const reportName = 'Laporan';
const profileName = 'Profil';

// Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home({navigation}) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data from API
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(); // Assume this function fetches user profile data from your API
        setUserData(userProfile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    // Call the fetchUserProfile function when component mounts
    fetchUserProfile();
  }, []);

  return (
    <>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let icon;
            if (route.name === homeName) {
              icon = focused ? <IconHomeActive /> : <IconHomeDisable />;
            } else if (route.name === activityName) {
              icon = focused ? <IconListActive /> : <IconListDisable />;
            } else if (route.name === reportName) {
              icon = focused ? <IconReportActive /> : <IconReportDisable />;
            } else if (route.name === profileName) {
              icon = focused ? <IconProfileActive /> : <IconProfileDisable />;
            }
            return icon;
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
          tabBarButton: props =>
            // Hide the tab button if the route name is "Laporan" and user status is not validated
            route.name === reportName &&
            userData &&
            !userData.statusValidate ? null : (
              <TabBarButton
                {...props}
                onPress={() => navigation.navigate(route.name)}
              />
            ),
          tabBarTouchable: 'auto',
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
    </>
  );
}

const MainComponent = ({navigation}) => {
  const [initialRoute, setInitialRoute] = useState('Login');
  const [isReady, setIsReady] = useState(false);
  const [userData, setUserData] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

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

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setUserData(profileData);
        // Periksa status verifikasi di sini
        if (!profileData.statusValidate && initialRoute === 'ReportForm') {
          // Jika status verifikasi adalah false dan rute awal adalah ReportForm, tampilkan modal
          setModalVisibility(true);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchUserProfile();
  }, [initialRoute]);

  if (!isReady) {
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
          name="Validation"
          component={ValidationAccount}
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
        <Stack.Screen
          name="NewsIndex"
          component={NewsIndex}
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
        <Stack.Screen
          name="DetailMarket"
          component={DetailMarket}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

      {/* Modal untuk verifikasi KTP */}
      <ModalPopup
        isVisible={modalVisibility}
        type={'alert'}
        titleModal={'Verifikasi KTP Kamu!'}
        descModal={'Verifikasi KTP diperlukan untuk menggunakan semua fitur'}
        rightButtonTitle={'Verifikasi'}
        leftButtonTitle={'Tutup'}
        onPressLeft={() => setModalVisibility(false)}
        onPressRight={() => {
          // Navigasi ke layar verifikasi KTP
          navigation.navigate('Validation');
          setModalVisibility(false);
        }}
      />
    </NavigationContainer>
  );
};

export default MainComponent;
