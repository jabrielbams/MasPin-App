import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  HeaderNavigation,
  LabelCategory,
  LabelStatus,
  LoadingIndicator,
  NotificationIcon,
  ReportCardMain,
  TabBar,
} from '../../components';
import {ENDPOINT} from '../../utils/endpoint';
import {getReportByUserId} from '../../services/reportData';
import styles from './styles';
import {IcChevronLeft} from '../../assets/icons';
import {ImgModalDanger, ImgModalWarning} from '../../assets/images';
import {Color, Fonts} from '../../constants';

const ActivityScreen = ({navigation}) => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const fetchReportData = async () => {
    setLoading(true);
    try {
      const data = await getReportByUserId();
      setReportData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
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
    fetchReportData();
  }, []);

  const renderItem = ({item}) => (
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
  );

  const filteredReportData = reportData.filter(
    report => report.status === activeTab,
  );

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <HeaderNavigation
            title={'Aktivitas'}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <View style={styles.dividerStyle} />
        <View style={{marginHorizontal: 16}}>
          <TabBar
            tabs={[
              {title: 'Menunggu', onPress: () => setActiveTab(1)},
              {title: 'Proses', onPress: () => setActiveTab(2)},
              {title: 'Selesai', onPress: () => setActiveTab(3)},
            ]}
            activeTab={activeTab}
          />
          <View style={styles.contentContainer}>
            {reportData.length === 0 ? (
              <View
                style={{
                  flexGrow: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '80%',
                }}>
                <ImgModalDanger />
                <Text
                  style={{
                    fontFamily: Fonts.MEDIUM,
                    fontSize: 16,
                    color: Color.BLACK,
                    marginTop: 8,
                  }}>
                  Belum Ada Laporan!
                </Text>
              </View>
            ) : (
              <FlatList
                data={filteredReportData}
                keyExtractor={item => item._id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            )}
          </View>
        </View>
      </View>

      {loading && <LoadingIndicator />}
    </View>
  );
};

export default ActivityScreen;
