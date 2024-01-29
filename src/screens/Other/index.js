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
import {styles} from './styles';

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
              navigation.navigate('Report', {
                section: 'Laporan',
              });
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
              navigation.navigate('HargaPangan', {
                section: 'Pasar',
              });
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
