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
  HeaderMain,
  HeaderNavigation,
  LabelCategory,
  LabelStatus,
  LoadingIndicator,
  ReportCardMain,
  SearchBar,
} from '../../components';
import {Color} from '../../constants';

const ReportIndex = props => {
  const {navigation, route} = props;
  const {section} = route.params;

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
      {/* HEADER */}
      <HeaderMain
        sectionTitle={section}
        showLeftButton={true}
        onPressBack={() => navigation.goBack()}
      />

      {/* SEARCH BAR */}
      <View style={styles.searchContent}>
        <SearchBar
          placeholder={'Cari laporan'}
          setSearchValue={text => setSearchReport(text)}
          searchValue={searchReport}
        />
      </View>

      {/* CONTENT LIST */}
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            data={allReportData.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            )}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default ReportIndex;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: Color.WHITE,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 32,
    flexGrow: 1,
  },
  searchContent: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexDirection: 'column',
    gap: 24,
    marginTop: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  errorText: {
    margin: 16,
    color: 'red',
    textAlign: 'center',
  },
});
