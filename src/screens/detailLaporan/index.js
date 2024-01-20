import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcChevronLeft, IcCopy, IcLikes} from '../../assets/icons';
import {
  DetailLaporanCard,
  DetailReportCategory,
  LabelCategory,
  LabelStatus,
  NotificationIcon,
  ReportInfoCard,
} from '../../components';
import styles from './styles';
import {Image} from 'react-native-elements';
import {ImgDetailLaporan, ImgPasarBms} from '../../assets/images';
import {Color, FontSize, Fonts} from '../../constants';

const DetailLaporan = props => {
  const {route, navigation} = props;
  const {section} = route.params;

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <View style={styles.title}>
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
          style={{marginBottom: 20}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {/* IMAGE CONTAINER */}
            <View
              style={{
                backgroundColor: Color.OUTLINE_GRAY,
                borderRadius: 8,
                width: '100%',
                height: 175,
              }}
            />
            <View style={styles.listInfo}>
              <DetailLaporanCard
                isPhaseTwo={false}
                title="Detail Laporan"
                reportID="0A1B2C3D4F5G6HJ7I89"
              />

              <ReportInfoCard
                receiver="Kecamatan Pereng"
                date="20 Januari 2024,"
                time="18.00 WIB"
              />

              <DetailReportCategory
                category={<LabelCategory title="Lalu Lintas" />}
                status={<LabelStatus type={1} />}
                date="20 Januari 2024,"
                time="18.00 WIB"
              />

              <DetailLaporanCard
                isPhaseTwo={true}
                title="Detail Laporan"
                desc=" Minta tolong pak ditindaklanjuti kemacetan di daerah Jalan
                Soedirman, sudah lebih dari 2 jam terus - terusan macet karena
                ada jalan besar berlubang di tengah jalan raya, beberapa jalan
                juga menjadi retak."
              />
              <DetailLaporanCard
                isPhaseTwo={true}
                title="Lokasi Laporan"
                desc=" Jl. Jend. Soedirman No.296, Pereng, Sokanegara, Kec.
                  Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailLaporan;
