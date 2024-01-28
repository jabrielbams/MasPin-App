import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {IcChevronLeft} from '../../../assets/icons';
import {
  ButtonMain,
  NotificationIcon,
  TaxInformation,
} from '../../../components';
import styles from './styles';
import {Color, FontSize, Fonts} from '../../../constants';

const DetailInfoTax = ({route, navigation}) => {
  const {section, taxData} = route.params;

  useEffect(() => {
    console.log(taxData);
  }, []);

  // Deklarasi variabel untuk menyimpan nilai properti
  let no_polisi,
    merek_kendaraan,
    tipe_kendaraan,
    milik_ke,
    tahun_pembuatan,
    harga_jual,
    status_kendaraan,
    masa_berlaku_pajak;
  let besar_kkb, tanggal_bayarKKB;
  let bnpb_pengesahan,
    bnpb_plat,
    bnpb_cetakStnk,
    bnpb_nopil,
    pkb_pokok,
    pkb_denda,
    swdkllj_pokok,
    swdkllj_denda,
    total_tagihan;

  // Periksa ketersediaan data pada taxData dan destruksikan propertinya
  if (taxData.data) {
    const {informasiKendaraan, riwayatPokok, rincianPajak} = taxData.data;

    if (informasiKendaraan) {
      ({
        no_polisi,
        merek_kendaraan,
        tipe_kendaraan,
        milik_ke,
        tahun_pembuatan,
        harga_jual,
        status_kendaraan,
        masa_berlaku_pajak,
      } = informasiKendaraan);
    }
    if (riwayatPokok) {
      ({besar_kkb, tanggal_bayarKKB} = riwayatPokok);
    }
    if (rincianPajak) {
      ({
        bnpb_pengesahan,
        bnpb_plat,
        bnpb_cetakStnk,
        bnpb_nopil,
        pkb_pokok,
        pkb_denda,
        swdkllj_pokok,
        swdkllj_denda,
        total_tagihan,
      } = rincianPajak);
    }
  }

  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = {day: 'numeric', month: 'long', year: 'numeric'};
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <View style={styles.mainBody}>
      <View style={styles.headerMain}>
        <View style={styles.sectionBar}>
          <Text style={styles.headerText}>Detail Pajak</Text>
        </View>
        <NotificationIcon style={{marginLeft: 'auto'}} />
      </View>
      <View style={styles.dividerStyle} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Informasi Kendaraan</Text>
          <View style={{marginVertical: 18}}>
            <TaxInformation desc="No. Polisi" result={no_polisi} />
            <TaxInformation desc="Merek Kendaraan" result={merek_kendaraan} />
            <TaxInformation desc="Tipe Kendaraan" result={tipe_kendaraan} />
            <TaxInformation desc="Milik Ke" result={milik_ke} />
            <TaxInformation desc="Tahun Pembuatan" result={tahun_pembuatan} />
            <TaxInformation desc="Harga Jual" result={harga_jual} />
            <TaxInformation desc="Status Kendaraan" result={status_kendaraan} />
            <TaxInformation
              desc="Masa Berlaku Pajak"
              descActive={true}
              result={formatDate(masa_berlaku_pajak)} //timestamp
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
              result={besar_kkb}
            />
            <TaxInformation
              desc="Tanggal Bayar PKB Pokok Terakhir"
              result={formatDate(tanggal_bayarKKB)}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Rincian Pajak</Text>
          <View style={{marginVertical: 18}}>
            <TaxInformation desc="PNBP Pengesahan" result={bnpb_pengesahan} />
            <TaxInformation desc="PNBP Plat" result={bnpb_plat} />
            <TaxInformation desc="PNPB Cetak STNK" result={bnpb_cetakStnk} />
            <TaxInformation desc="PNPB Nopil" result={bnpb_nopil} />
            <TaxInformation desc="PKB Pokok" result={pkb_pokok} />
            <TaxInformation desc="PKB Denda" result={pkb_denda} />
            <TaxInformation desc="SWDKLLJ Pokok" result={swdkllj_pokok} />
            <TaxInformation desc="SWDKLLJ Denda" result={swdkllj_denda} />
            <TaxInformation
              desc="Total Tagihan"
              descActive={true}
              result={total_tagihan}
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
