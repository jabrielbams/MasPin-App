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
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, FontSize, Fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FeatureIcon,
  HeaderMain,
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
import {
  IcChevronRightActive,
  IconBusRoute,
  IconChartPrice,
  IconOthers,
  IconReport,
  IconTax,
  IconTelephone,
} from '../../assets/icons';
import {ImgBanner, ImgCar, ImgNewsCovid} from '../../assets/images';
import {getAllReport} from '../../services/reportData';
import {FlatList} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import {getUserProfile} from '../../services/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllNews} from '../../services/news';

const HomeScreen = ({navigation}) => {
  const LAST_NOTIFICATION_CLOSE_DATE_KEY = 'lastNotificationCloseDate';
  const [reportData, setReportData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [newsData, setNewsData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

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

  // Fungsi untuk mengeksekusi refresh data
  const onRefresh = () => {
    setRefreshing(true);
    // Tempatkan pembaruan data Anda di sini, misalnya:
    fetchAPI().then(() => {
      setRefreshing(false);
    });
  };

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const allReport = await getAllReport();
      const allUserData = await getUserProfile();
      const allNewsData = await getAllNews();
      setReportData(allReport);
      setUserData(allUserData);
      setNewsData(allNewsData);
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

  const handlingVerificationModal = async () => {
    if (!!userData && !userData.statusValidate) {
      setModalVisibility(true);
    } else {
      setModalVisibility(false);
    }
  };

  const handleCloseModal = () => {
    setModalVisibility(false);
  };

  const navigateToReportScreen = () => {
    if (userData && userData.statusValidate) {
      navigation.navigate('Report');
    } else {
      setModalVisibility(true);
    }
  };

  const handleReportTabClick = () => {
    navigateToReportScreen();
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
  }, []);

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderMain sectionTitle={'Beranda'} />

      {/* CONTENT */}
      <ScrollView
        style={{marginBottom: 16}}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* Banner */}
        <View style={styles.bannerBox}>
          <Image source={ImgBanner} style={{borderRadius: 8}} />
        </View>

        {/* Feature List */}
        <View style={styles.content}>
          <View style={styles.featureList}>
            <FeatureIcon
              icon={<IconReport />}
              label="Laporan"
              onPress={() => {
                navigateToReportScreen();
              }}
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
              icon={<IconTelephone />}
              label="Darurat"
              onPress={() => {
                navigation.navigate('Telephone', {
                  section: 'Telepon Darurat',
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
          {/* Laporan */}
          <View style={styles.sectionDivider}>
            <Text style={styles.sectionTitle}>Laporan</Text>
            <TouchableOpacity
              style={styles.otherStyle}
              onPress={() => {
                navigation.navigate('ReportIndex', {
                  section: 'Laporan',
                });
              }}>
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

          {/* Berita */}
          <View style={styles.sectionDivider}>
            <Text style={styles.sectionTitle}>Berita Terbaru</Text>
            <TouchableOpacity
              style={styles.otherStyle}
              onPress={() => {
                navigation.navigate('NewsIndex', {
                  section: 'Berita Terbaru',
                });
              }}>
              <Text style={styles.otherText}>Lainnya</Text>
              <IcChevronRightActive />
            </TouchableOpacity>
          </View>

          <View>
            {newsData ? (
              newsData
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 2)
                .map(item => (
                  <NewsCardMain
                    key={item._id}
                    imageNews={item.gambar_berita}
                    titleNews={item.judul}
                    descNews={item.isi.deskripsi}
                    category={item.kategori}
                    onPress={() => {
                      navigation.navigate('DetailNews', {
                        section: 'Detail Berita',
                        newsData: item,
                      });
                    }}
                  />
                ))
            ) : (
              <ReportCardMainSkeleton />
            )}
          </View>
        </View>

        <ModalPopup
          isVisible={modalVisibility}
          type={'alert'}
          titleModal={'Verifikasi KTP Kamu!'}
          descModal={'Verifikasi KTP diperlukan untuk menggunakan semua fitur'}
          rightButtonTitle={'Verifikasi'}
          leftButtonTitle={'Tutup'}
          onPressLeft={handleCloseModal}
          onPressRight={handleVerificationButton}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
