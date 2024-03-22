import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../constants';
import {CardSubMenu, HeaderMain, HeaderNavigation} from '../../components';
import SubMenu from '../../components/molecules/submenu';
import {
  IconBusRoute,
  IconChartPrice,
  IconReport,
  IconTax,
  IconTelephone,
} from '../../assets/icons';
import {styles} from './styles';

export default function OtherFeatures(props) {
  const {navigation, route} = props;
  const {section} = route.params;

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
              navigation.navigate('Telephone', {
                section: 'Telepon Darurat',
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
