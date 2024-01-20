import {View, Text, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {IcSearch} from '../../assets';
import {ImgCar} from '../../assets/images';
import {
  NotificationIcon,
  ReportCardMain,
  LabelCategory,
  LabelStatus,
} from '../../components';
import styles from './styles';

const ReportScreen = () => {
  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <Text style={styles.headerText}>Laporan</Text>
          <NotificationIcon style={{marginLeft: 'auto'}} />
        </View>
        <View style={styles.dividerStyle} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.searchBox}>
              <IcSearch />
              <TextInput
                placeholder="Cari layanan"
                style={styles.placeholder}
              />
            </View>
            <View style={{marginTop: 24}}>
              <ReportCardMain
                imgReport={ImgCar}
                descReport="Minta tolong pak ditindaklanjuti kemacetan di daerah Jalan Gereja,
                sudah 5 minggu mangkrak dipinggir jalan"
                category={<LabelCategory title="Lalu Lintas" />}
                status={<LabelStatus type={1} />}
              />
              <ReportCardMain
                imgReport={ImgCar}
                descReport="Minta tolong pak ditindaklanjuti kemacetan di daerah Jalan Gereja,
                sudah 5 minggu mangkrak dipinggir jalan"
                category={<LabelCategory title="Lalu Lintas" />}
                status={<LabelStatus type={2} />}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ReportScreen;
