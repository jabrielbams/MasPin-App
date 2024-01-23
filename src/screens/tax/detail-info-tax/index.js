import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {IcChevronLeft} from '../../../assets/icons';
import {
  ButtonMain,
  NotificationIcon,
  TaxInformation,
} from '../../../components';
import styles from './styles';
import {Color, FontSize, Fonts} from '../../../constants';

const DetailInfoTax = props => {
  const {route, navigation} = props;
  const {section} = route.params;

  return (
    <View style={styles.mainBody}>
      <View style={styles.headerMain}>
        <View style={styles.sectionBar}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Informasi Kendaraan</Text>
          <View style={{marginVertical: 18}}>
            <TaxInformation desc="No. Polisi" result="R 1234 B" />
            <TaxInformation desc="Merek Kendaraan" result="Honda Beat" />
            <TaxInformation desc="Tipe Kendaraan" result="Deluxe" />
            <TaxInformation desc="Milik Ke" result="John Doe" />
            <TaxInformation desc="Tahun Pembuatan" result="2022" />
            <TaxInformation desc="Harga Jual" result="Rp. 25,000,000" />
            <TaxInformation desc="Status Kendaraan" result="Tidak Diblokir" />
            <TaxInformation
              desc="Masa Berlaku Pajak"
              descActive={true}
              result="13 Januari 2024"
              resultActive={true}
            />
          </View>
        </View>
        <View style={styles.dividerStyle} />
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Riwayat Pokok</Text>
          <View style={{marginVertical: 18}}>
            <TaxInformation
              desc="Besar PKB Pokok Terakhir"
              result="Rp. 1,000,000"
            />
            <TaxInformation
              desc="Tanggal Bayar PKB Pokok Terakhir"
              result="13 Januari 2024"
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Rincian Pajak</Text>
          <View style={{marginVertical: 18}}>
            <TaxInformation desc="PNBP Pengesahan" result="Rp. 1,000,000" />
            <TaxInformation desc="PNBP Plat" result="Rp. 500,000" />
            <TaxInformation desc="PNPB Cetak STNK" result="Rp. 200,000" />
            <TaxInformation desc="PNPB Nopil" result="Rp. 300,000" />
            <TaxInformation desc="PKB Pokok" result="Rp. 700,000" />
            <TaxInformation desc="PKB Denda" result="Rp. 50,000" />
            <TaxInformation desc="SWDKLLJ Pokok" result="Rp. 100,000" />
            <TaxInformation desc="SWDKLLJ Denda" result="Rp. 10,000" />
            <TaxInformation
              desc="Total Tagihan"
              descActive={true}
              result="Rp. 2,860,000"
              resultActive={true}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: 16, paddingVertical: 16}}>
        <ButtonMain
          title="Kembali"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

export default DetailInfoTax;
