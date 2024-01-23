import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Color, Fonts, FontSize} from '../../constants';
import {
  HeaderNavigation,
  SearchBar,
  ReportCard,
  ReportCardMain,
  LabelCategory,
  LabelStatus,
} from '../../components';
import {ENDPOINT} from '../../utils/endpoint';

export default function ReportIndex({navigation}) {
  const [reportData, setReportData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const response = await axios.get(ENDPOINT.NGROK.GET, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        const result = response.data;

        if (result.success) {
          setReportData(result.data);
        } else {
          console.error('Error fetching data:', result.message);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredReportData = reportData.filter(
    report =>
      report.detail_masalah.toLowerCase().includes(searchText.toLowerCase()) ||
      report.kategori_masalah.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <ReportCardMain
      key={item._id}
      imgReport={item.image_laporan}
      descReport={item.detail_masalah}
      category={<LabelCategory title={item.kategori_masalah} />}
      status={<LabelStatus type={3} />}
    />
  );

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <HeaderNavigation
            title={'Lainnya'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.dividerStyle} />
        <View style={{marginTop: 12, marginHorizontal: 16}}>
          <SearchBar
            placeholder={'Cari laporan'}
            setSearchValue={text => setSearchText(text)}
            searchValue={searchText}
          />
        </View>
        <View style={styles.contentContainer}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={filteredReportData}
              keyExtractor={item => item._id}
              renderItem={({item}) => (
                <ReportCardMain
                  key={item._id}
                  imgReport={item.image_laporan}
                  descReport={item.detail_masalah}
                  category={<LabelCategory title={item.kategori_masalah} />}
                  status={<LabelStatus type={3} />}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </View>
  );
}

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
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 24,
  },
});
