import {
  KeyboardAvoidingView,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, FontSize, Fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FeatureIcon,
  LabelCategory,
  LabelStatus,
  NewsCardMain,
  NotificationIcon,
  ReportCardMain,
  SearchBar,
} from '../../components';
import styles from './styles';
import {
  IcChevronRightActive,
  IconBusRoute,
  IconChartPrice,
  IconOthers,
  IconReport,
  IconTax,
} from '../../assets/icons';
import {ImgCar, ImgNewsCovid} from '../../assets/images';

const HomeScreen = ({navigation}) => {
  async function requestLocationPermission() {
    const locationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Akses Lokasi Diperlukan',
        message: 'Aplikasi ini memerlukan akses lokasi',
      },
    );
    console.log(locationPermission);
  }

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message:
            'App needs access to your camera ' + 'so you can take pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestPermissions = async () => {
    await requestCameraPermission();
    await requestLocationPermission();
  };

  useEffect(() => {
    requestPermissions();
  });

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <Text style={styles.headerText}>Beranda</Text>
          <NotificationIcon style={{marginLeft: 'auto'}} />
        </View>
        <View style={styles.dividerStyle} />
        <ScrollView
          style={{marginBottom: 50}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View
              style={{
                backgroundColor: Color.LIGHT_GRAY,
                borderRadius: 8,
                height: 140,
                width: '100%',
                marginBottom: 24,
                marginTop: 32,
              }}></View>
            <View style={styles.featureList}>
              <FeatureIcon
                icon={<IconReport />}
                label="Laporan"
                onPress={() => navigation.navigate('Report')}
              />
              <FeatureIcon
                icon={<IconTax />}
                label="Pajak"
                onPress={() => navigation.navigate('Tax')}
              />
              <FeatureIcon
                icon={<IconBusRoute />}
                label="Rute"
                onPress={() => navigation.navigate('Bus')}
              />
              <FeatureIcon
                icon={<IconChartPrice />}
                label="Harga"
                onPress={() => navigation.navigate('Price')}
              />
              <FeatureIcon icon={<IconOthers />} label="Lainnya" />
            </View>
          </View>
          <View style={styles.dividerStyle} />
          <View style={styles.content}>
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionTitle}>Laporan</Text>
              <TouchableOpacity style={styles.otherStyle}>
                <Text style={styles.otherText}>Lainnya</Text>
                <IcChevronRightActive />
              </TouchableOpacity>
            </View>
            <View>
              <ReportCardMain
                // imgReport={ImgCar}
                descReport="Minta tolong pak ditindaklanjuti kemacetan di daerah Jalan Gereja,
                sudah 5 minggu mangkrak dipinggir jalan"
                category={<LabelCategory title="Lalu Lintas" />}
                status={<LabelStatus type={1} />}
              />
              <ReportCardMain
                // imgReport={ImgCar}
                descReport="Minta tolong pak ditindaklanjuti kemacetan di daerah Jalan Gereja,
                sudah 5 minggu mangkrak dipinggir jalan"
                category={<LabelCategory title="Lalu Lintas" />}
                status={<LabelStatus type={1} />}
              />
              <ReportCardMain
                // imgReport={ImgCar}
                descReport="Minta tolong pak ditindaklanjuti kemacetan di daerah Jalan Gereja,
                sudah 5 minggu mangkrak dipinggir jalan"
                category={<LabelCategory title="Lalu Lintas" />}
                status={<LabelStatus type={1} />}
              />
            </View>
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionTitle}>Berita Terbaru</Text>
              <TouchableOpacity style={styles.otherStyle}>
                <Text style={styles.otherText}>Lainnya</Text>
                <IcChevronRightActive />
              </TouchableOpacity>
            </View>
            <View>
              <NewsCardMain
                imgNews={ImgNewsCovid}
                category="KESEHATAN"
                titleNews="COVID-19 Kembali Meningkat di Kabupaten Banyumas"
                descNews="Kabupaten Banyumas kembali meng-alamai lonjakan COVID-19. Masyarakat dihimbau untuk kembali untuk tetap menggunakan masker dan membawa hand sanitizer"
              />
              <NewsCardMain
                imgNews={ImgNewsCovid}
                category="KESEHATAN"
                titleNews="COVID-19 Kembali Meningkat di Kabupaten Banyumas"
                descNews="Kabupaten Banyumas kembali meng-alamai lonjakan COVID-19. Masyarakat dihimbau untuk kembali untuk tetap menggunakan masker dan membawa hand sanitizer"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
