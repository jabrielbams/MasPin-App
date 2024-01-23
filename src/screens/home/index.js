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
  NewsCardMain,
  NotificationIcon,
  ReportCardMain,
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

const HomeScreen = ({navigation}) => {
  const [reportData, setReportData] = useState(null);

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

  const handleReportIndexButton = () => {
    navigation.navigate('ReportIndex');
  };

  const fetchDataReport = async () => {
    try {
      const allReport = await getAllReport();
      setReportData(allReport);
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
  };

  // Panggil fungsi fetchDataFromApi ketika komponen ini diload

  useFocusEffect(() => {
    fetchDataReport();
  });
  useEffect(() => {
    requestPermissions();
  }, []);

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
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 24,
              paddingHorizontal: 8,
            }}>
            <Image
              source={require('../../assets/images/img-banner-home.jpg')}
              style={{width: '100%', borderRadius: 8}}
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
              {(reportData && (
                <FlatList
                  data={
                    reportData
                      ? reportData
                          .sort(
                            (a, b) =>
                              new Date(b.createdAt) - new Date(a.createdAt),
                          )
                          .slice(0, 3)
                      : []
                  }
                  renderItem={({item}) => (
                    <ReportCardMain
                      key={item._id}
                      imgReport={item.image_laporan}
                      descReport={item.detail_masalah}
                      category={<LabelCategory title={item.kategori_masalah} />}
                      status={<LabelStatus type={3} />}
                      onPress={() => {
                        navigation.navigate('DetailLaporan', {
                          section: 'Detail Laporan',
                        });
                      }}
                    />
                  )}
                  keyExtractor={item => item._id}
                />
              )) || <Text>Data tidak ada</Text>}
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
