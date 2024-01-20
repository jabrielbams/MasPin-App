import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../constants';
import {CardSubMenu, HeaderNavigation} from '../../components';
import SubMenu from '../../components/molecules/submenu';
import {IconTelephone} from '../../assets/icons';

export default function EmergencyContact({navigation}) {
  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <HeaderNavigation
            title={'Telepon Darurat'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.dividerStyle} />
        <View style={styles.cardContainer}>
          <CardSubMenu
            title={'Ambulans'}
            leftIcon={<IconTelephone />}
            onPress={() => {
              navigation.navigate('Report');
            }}
          />
          <CardSubMenu
            title={'Polisi'}
            leftIcon={<IconTelephone />}
            onPress={() => {
              navigation.navigate('Tax');
            }}
          />
          <CardSubMenu
            title={'Pemadam Kebakaran'}
            leftIcon={<IconTelephone />}
            onPress={() => {
              navigation.navigate('Bus');
            }}
          />
          <CardSubMenu
            title={'Badan SAR'}
            leftIcon={<IconTelephone />}
            onPress={() => {
              navigation.navigate('Market');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 32,
  },
  headerMain: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  titleSection: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 24,
    color: Color.BLACK,
  },
  content: {
    paddingHorizontal: 16,
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 20,
    marginVertical: 20,
    marginHorizontal: 16,
  },
});
