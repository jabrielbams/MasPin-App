import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../constants';
import {CardSubMenu, HeaderMain, HeaderNavigation} from '../../components';
import SubMenu from '../../components/molecules/submenu';
import {IconTelephone} from '../../assets/icons';
import call from 'react-native-phone-call';
import styles from './styles';

export default function EmergencyContact(props) {
  const {navigation, route} = props;
  const {section} = route.params;

  const makeEmergencyCall = phoneNumber => {
    const url = `tel:${phoneNumber}`;

    Linking.openURL(url).catch(error =>
      console.error('An error occurred', error),
    );
  };

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderMain
        sectionTitle={section}
        showLeftButton={true}
        onPressBack={() => navigation.goBack()}
      />

      {/* CONTENT LIST */}
      <View>
        <View style={styles.cardContainer}>
          <CardSubMenu
            title={'Ambulans'}
            leftIcon={<IconTelephone />}
            onPress={() => {
              makeEmergencyCall('118');
            }}
          />
          <CardSubMenu
            title={'Polisi'}
            leftIcon={<IconTelephone />}
            onPress={() => {
              makeEmergencyCall('110');
            }}
          />
          <CardSubMenu
            title={'Pemadam Kebakaran'}
            leftIcon={<IconTelephone />}
            onPress={() => makeEmergencyCall('113')}
          />
          <CardSubMenu
            title={'Badan SAR'}
            leftIcon={<IconTelephone />}
            onPress={() => {
              makeEmergencyCall('113');
            }}
          />
        </View>
      </View>
    </View>
  );
}
