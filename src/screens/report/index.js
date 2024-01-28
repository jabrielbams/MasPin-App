import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ENDPOINT} from '../../utils/endpoint';
import {
  HeaderNavigation,
  LabelCategory,
  LabelStatus,
  ReportCardMain,
  SearchBar,
} from '../../components';
import {Color} from '../../constants';

const ReportIndex = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [searchReport, setSearchReport] = useState('');
  const [allReportData, setAllReportData] = useState([]);

  const getReport = async searchQuery => {
    setLoading(true);
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const response = await axios.get(
        `${ENDPOINT.REPORT.REPORT_ALL}?detail_masalah=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );
      setAllReportData(response.data.data);
      console.log('search success', response.data.data);
    } catch (error) {
      console.error('Error searching:', error.message);
      setError('Terjadi kesalahan saat mencari data. Silakan coba lagi.');
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
    getReport(searchReport);
  }, [searchReport]);

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

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <HeaderNavigation
            title={'Laporan'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.dividerStyle} />
        <View style={{marginTop: 12, marginHorizontal: 16}}>
          <SearchBar
            placeholder={'Cari laporan'}
            setSearchValue={text => setSearchReport(text)}
            searchValue={searchReport}
          />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={allReportData}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    </View>
  );
};

export default ReportIndex;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 32,
    flexGrow: 1,
  },
  headerMain: {
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  contentContainer: {
    flexDirection: 'column',
    gap: 24,
    marginHorizontal: 16,
    marginTop: 16,
  },
  errorText: {
    margin: 16,
    color: 'red',
    textAlign: 'center',
  },
});
