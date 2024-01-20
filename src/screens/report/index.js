import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from '../../components/molecules/input-dropdown/style';
import {IcSearch} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Color, Fonts} from '../../constants';
import {HeaderNavigation, NotificationIcon, SearchBar} from '../../components';
import {API_BASE_URL1} from '@env';

const ReportIndex = ({navigation}) => {
  const [reportData, setReportData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Get refreshToken from AsyncStorage
  //       const refreshToken = await AsyncStorage.getItem('refreshToken');

  //       // Fetch data from API using refreshToken for authorization
  //       const response = await fetch(`${BASE_URL}/api/laporan/get-laporan`, {
  //         method: 'GET',
  //         headers: {
  //           Authorization: `Bearer ${refreshToken}`,
  //         },
  //       });

  //       const result = await response.json();

  //       if (result.success) {
  //         // Update the reportData state with the fetched data
  //         setReportData(result.data);
  //       } else {
  //         console.error('Error fetching data:', result.message);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // // Filter the reportData based on search text
  // const updateSearch = search => {
  //   setSearch(search);
  // };

  const filteredReportData = reportData.filter(
    report =>
      report.description.toLowerCase().includes(searchText.toLowerCase()) ||
      report.label.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <HeaderNavigation
            title={'Laporan'}
            onPress={() => {
              console.log('kembali');
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.dividerStyle} />
        <View style={styles.content}>
          <SearchBar
            setSearchValue={text => setSearchText(text)}
            searchValue={searchText}
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
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  titleSection: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 24,
    color: Color.BLACK,
  },
  content: {
    paddingHorizontal: 16,
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },

  searchContainer: {
    borderRadius: 8,
    borderColor: Color.OUTLINE_GRAY,
  },
});
