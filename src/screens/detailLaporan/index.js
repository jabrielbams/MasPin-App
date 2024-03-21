import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {IcChevronLeft, IcCopy, IcLikes} from '../../assets/icons';
import {
  ButtonMain,
  DetailLaporanCard,
  DetailReportCategory,
  LabelCategory,
  LabelStatus,
  NotificationIcon,
  ReportInfoCard,
} from '../../components';
import {Image} from 'react-native-elements';
import {ImgDetailLaporan, ImgPasarBms} from '../../assets/images';
import {Color, FontSize, Fonts} from '../../constants';
import styles from './styles';

const DetailLaporan = props => {
  const {route, navigation} = props;
  const {section} = route.params;
  const {reportData} = route.params;

  const formatDateTime = createdAt => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };

    const formattedDate = new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(createdAt));

    const formattedTime = new Intl.DateTimeFormat('id-ID', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(createdAt));

    return {formattedDate, formattedTime};
  };

  const handlingCopy = () => {
    Clipboard.setString(reportData._id);
  };

  return (
    <View style={styles.mainBody}>
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
      </View>
      <View style={styles.dividerStyle} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* IMAGE CONTAINER */}
          <View
            style={{
              backgroundColor: Color.OUTLINE_GRAY,
              borderRadius: 8,
              width: '100%',
              height: 175,
            }}>
            <Image
              source={{uri: reportData.image_laporan}}
              style={{width: '100%', height: '100%', borderRadius: 8}}
            />
          </View>
          <View style={styles.listInfo}>
            <DetailLaporanCard
              isPhaseTwo={false}
              title="Id Laporan"
              reportID={reportData._id}
              onPressCopy={handlingCopy}
            />

            <ReportInfoCard
              receiver="Pihak terkait"
              date={formatDateTime(reportData.createdAt).formattedDate}
              time={formatDateTime(reportData.createdAt).formattedTime}
            />

            <DetailReportCategory
              category={<LabelCategory title={reportData.kategori_masalah} />}
              status={<LabelStatus type={reportData.status} />}
              date={formatDateTime(reportData.createdAt).formattedDate}
              time={formatDateTime(reportData.createdAt).formattedTime}
            />

            <DetailLaporanCard
              isPhaseTwo={true}
              title="Detail Laporan"
              desc={reportData.detail_masalah}
            />
            <DetailLaporanCard
              isPhaseTwo={true}
              title="Lokasi Laporan"
              desc={reportData.lokasi}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailLaporan;
