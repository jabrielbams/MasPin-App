/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {NotificationIcon, TaxCardMain} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IcChevronLeft,
  IcChevronRightActive,
  IconCar,
  IconHouse,
  IconMotorcycle,
} from '../../assets/icons';
import {Color, FontSize, Fonts} from '../../constants';
import {useTax} from './useTax';

const TaxScreen = props => {
  const {
    uiWording,
    isPhaseTwo,
    type1,
    onChangeTitle,
    onChangeType,
    onChangePhase,
  } = useTax();

  const {route, navigation} = props;
  const {section} = route.params;

  const navigateRodaDua = () => {
    navigation.navigate('DetailTax', {
      title: 'Pajak Kendaraan Roda 2',
      desc: 'Masukan plat kendaraanmu untuk melihat',
      section: 'Pajak',
      type: 1,
    });
  };

  const navigateRodaEmpat = () => {
    navigation.navigate('DetailTax', {
      title: 'Pajak Kendaraan Roda 4',
      desc: 'Masukan plat kendaraanmu untuk melihat',
      section: 'Pajak',
      type: 1,
    });
  };

  const navigateKodeBayar = () => {
    navigation.navigate('DetailTax', {
      title: 'Cek Kode Bayar',
      desc: 'Masukan 18 digit kode unik Nomor Objek PBB',
      section: 'Kode Bayar',
      type: 2,
    });
  };

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 6,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <IcChevronLeft />
            </TouchableOpacity>
            <Text style={styles.headerText}>{section}</Text>
          </View>
          <NotificationIcon style={{marginLeft: 'auto'}} />
        </View>
        <View style={styles.dividerStyle} />
        <ScrollView
          style={{marginBottom: 50}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image
                source={require('../../assets/images/img-banner-pajak.jpg')}
                style={{width: '100%', borderRadius: 8}}
              />
            </View>
            <View>
              <View style={{marginVertical: 24}}>
                <Text style={styles.sectionTitle}>Pilih Layanan</Text>
                <View style={styles.sectionList}>
                  <TaxCardMain
                    iconRight={<IconMotorcycle />}
                    title="Pajak Kendaraan Roda 2"
                    descDetail="Detail & Bayar"
                    iconDetail={<IcChevronRightActive />}
                    onPress={navigateRodaDua}
                  />
                  <TaxCardMain
                    iconRight={<IconCar />}
                    title="Pajak Kendaraan Roda 4"
                    descDetail="Detail & Bayar"
                    iconDetail={<IcChevronRightActive />}
                    onPress={navigateRodaEmpat}
                  />
                  <TaxCardMain
                    iconRight={<IconHouse />}
                    title="Pajak Bumi dan Bangunan"
                    descDetail="Detail & Bayar"
                    iconDetail={<IcChevronRightActive />}
                  />
                </View>
              </View>
              <View style={{marginVertical: 24}}>
                <Text style={styles.sectionTitle}>Layanan Lainnya</Text>
                <View style={styles.sectionList}>
                  <TaxCardMain
                    iconRight={<IconHouse />}
                    title="Cek Kode Bayar"
                    descDetail="Detail & Bayar"
                    iconDetail={<IcChevronRightActive />}
                    onPress={navigateKodeBayar}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TaxScreen;
