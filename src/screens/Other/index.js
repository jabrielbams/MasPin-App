import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../constants';
import {CardSubMenu, HeaderNavigation} from '../../components';
import SubMenu from '../../components/molecules/submenu';
import {
  IconBusRoute,
  IconChartPrice,
  IconReport,
  IconTax,
  IconTelephone,
} from '../../assets/icons';

export default function OtherFeatures({navigation}) {
  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <HeaderNavigation
            title={'Lainnya'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.dividerStyle} />
        <View style={styles.cardContainer}>
          <CardSubMenu
            title={'Lapor Masalah'}
            leftIcon={<IconReport />}
            onPress={() => {
              navigation.navigate('Report');
            }}
          />
          <CardSubMenu
            title={'Cek Pajak'}
            leftIcon={<IconTax />}
            onPress={() => {
              navigation.navigate('Tax', {
                section: 'Pajak',
              });
            }}
          />
          <CardSubMenu
            title={'Rute & Jadwal Bus'}
            leftIcon={<IconBusRoute />}
            onPress={() => {
              navigation.navigate('Bus', {
                section: 'Rute Bus',
              });
            }}
          />
          <CardSubMenu
            title={'Harga Bahan Pangan'}
            leftIcon={<IconChartPrice />}
            onPress={() => {
              navigation.navigate('HargaPangan');
            }}
          />
          <CardSubMenu
            title={'Telepon Darurat'}
            leftIcon={<IconTelephone />}
            onPress={() => {
              navigation.navigate('Telephone');
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
