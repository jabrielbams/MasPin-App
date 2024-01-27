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
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, FontSize, Fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FeatureIcon,
  LabelCategory,
  LabelStatus,
  ModalPopup,
  NewsCardMain,
  NotificationIcon,
  ReportCardMain,
  ReportCardMainSkeleton,
  SearchBar,
} from '../../components';
import styles from './styles';
import {useHome} from './useHome';
import {
  IcChevronRightActive,
  IconBusRoute,
  IconChartPrice,
  IconOthers,
  IconReport,
  IconTax,
} from '../../assets/icons';
import {ImgCar, ImgNewsCovid} from '../../assets/images';
import {getAllReport} from '../../services/reportData';
import {FlatList} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import {getUserProfile} from '../../services/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const LAST_NOTIFICATION_CLOSE_DATE_KEY = 'lastNotificationCloseDate';
  const [reportData, setReportData] = useState(null);
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [modalVisibility, setModalVisibility] = useState(false);

  async function requestLocationPermission() {
    const locationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Akses Lokasi Diperlukan',
        message: 'Aplikasi ini memerlukan akses lokasi',
      },
    );
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

  const handleReportIndexButton = () => {
    navigation.navigate('ReportIndex');
  };

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const allReport = await getAllReport();
      const userData = await getUserProfile();
      setReportData(allReport);
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const saveLastNotificationCloseDate = async () => {
    try {
      await AsyncStorage.setItem(
        LAST_NOTIFICATION_CLOSE_DATE_KEY,
        new Date().toISOString(),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const canShowNotification = async () => {
    try {
      const lastNotificationCloseDate = await AsyncStorage.getItem(
        LAST_NOTIFICATION_CLOSE_DATE_KEY,
      );
      if (!lastNotificationCloseDate) {
        return true;
      } else {
        const currentDate = new Date();
        const lastCloseDate = new Date(lastNotificationCloseDate);
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(
          Math.abs((currentDate - lastCloseDate) / oneDay),
        );

        return diffDays >= 1;
      }
    } catch (error) {
      return true;
    }
  };

  const handlingVerificationModal = async () => {
    const shouldShowNotification = await canShowNotification();

    if (!!userData?.statusValidate && shouldShowNotification) {
      setModalVisibility(true);
    } else {
      setModalVisibility(false);
    }
  };

  const handleCloseModal = () => {
    setModalVisibility(false);
    saveLastNotificationCloseDate();
  };

  const handleVerificationButton = () => {
    setModalVisibility(false);
    navigation.navigate('Validation');
  };

  const timeDifference = createdAt => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const differenceInSeconds = Math.floor((now - createdDate) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} detik lalu`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes}m lalu`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours}j lalu`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days}h lalu`;
    }
  };

  useEffect(() => {
    fetchAPI();
    requestPermissions();
    handlingVerificationModal();
  }, [reportData, userData]);

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <Text style={styles.headerText}>Beranda</Text>
        </View>
        <View style={styles.dividerStyle} />
        <ScrollView
          style={{marginBottom: 50}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 24,
              paddingHorizontal: 8,
            }}>
            <Image
              source={require('../../assets/images/img-banner-home.jpg')}
              style={{borderRadius: 8}}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.featureList}>
              <FeatureIcon
                icon={<IconReport />}
                label="Laporan"
                onPress={() => navigation.navigate('Report')}
              />
              <FeatureIcon
                icon={<IconTax />}
                label="Pajak"
                onPress={() => {
                  navigation.navigate('Tax', {
                    section: 'Pajak',
                  });
                }}
              />
              <FeatureIcon
                icon={<IconBusRoute />}
                label="Rute"
                onPress={() => {
                  navigation.navigate('Bus', {
                    section: 'Rute Bus',
                  });
                }}
              />
              <FeatureIcon
                icon={<IconChartPrice />}
                label="Harga"
                onPress={() => {
                  navigation.navigate('HargaPangan', {
                    section: 'Harga Pangan',
                  });
                }}
              />
              <FeatureIcon
                icon={<IconOthers />}
                label="Lainnya"
                onPress={() => {
                  navigation.navigate('OtherFeatures', {
                    section: 'Lainnya',
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.dividerStyle} />
          <View style={styles.content}>
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionTitle}>Laporan</Text>
              <TouchableOpacity
                style={styles.otherStyle}
                onPress={handleReportIndexButton}>
                <Text style={styles.otherText}>Lainnya</Text>
                <IcChevronRightActive />
              </TouchableOpacity>
            </View>
            <View>
              {reportData ? (
                reportData
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 3)
                  .map(item => (
                    <ReportCardMain
                      key={item._id}
                      imgReport={item.image_laporan}
                      descReport={item.detail_masalah}
                      category={<LabelCategory title={item.kategori_masalah} />}
                      status={<LabelStatus type={item.status} />}
                      uploadDate={timeDifference(item.createdAt)}
                      onPress={() => {
                        navigation.navigate('DetailLaporan', {
                          section: 'Detail Laporan',
                          reportData: item,
                        });
                      }}
                    />
                  ))
              ) : (
                <ReportCardMainSkeleton />
              )}
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

          <ModalPopup
            isVisible={modalVisibility}
            type={'alert'}
            titleModal={'Verifikasi KTP Kamu!'}
            descModal={
              'Verifikasi KTP diperlukan untuk menggunakan semua fitur'
            }
            rightButtonTitle={'Verifikasi'}
            leftButtonTitle={'Tutup'}
            onPressLeft={handleCloseModal}
            onPressRight={handleVerificationButton}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
