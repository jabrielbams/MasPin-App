import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  HeaderNavigation,
  LoadingIndicator,
  NewsCardMain,
  SearchBar,
} from '../../components';
import {getAllNews} from '../../services/news';
import {Color} from '../../constants';
import {ENDPOINT} from '../../utils/endpoint';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewsIndex = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const [newsData, setNewsData] = useState([]);
  const [searchNews, setSearchNews] = useState('');

  const getAllNews = async searchQuery => {
    setLoading(true);
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      const response = await axios.get(
        `${ENDPOINT.NEWS.GET_NEWS}?judul=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );
      setNewsData(response.data.data);
      console.log('fetch success', response.data.data);
    } catch (error) {
      console.error('Error fetching:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNews(searchNews);
  }, [searchNews]);

  const renderCard = ({item}) => (
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
  );

  return (
    <View style={styles.mainBody}>
      <View>
        <View style={styles.headerMain}>
          <HeaderNavigation
            title={'Berita'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.dividerStyle} />
        <View style={{marginTop: 12, marginHorizontal: 16}}>
          <SearchBar
            placeholder={'Cari Berita'}
            setSearchValue={text => setSearchNews(text)}
            searchValue={searchNews}
          />
        </View>
        <View style={styles.contentContainer}>
          {newsData ? (
            <FlatList
              data={newsData}
              keyExtractor={item => item._id}
              renderItem={renderCard}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text>Server Error</Text>
          )}
        </View>
      </View>
      {loading && <LoadingIndicator />}
    </View>
  );
};

export default NewsIndex;

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
    marginHorizontal: 16,
    marginTop: 16,
    gap: 24,
  },
});
