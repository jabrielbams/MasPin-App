import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  HeaderMain,
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
import styles from './styles';

const NewsIndex = props => {
  const {navigation, route} = props;
  const {section} = route.params;

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
      {/* HEADER */}
      <HeaderMain
        sectionTitle={section}
        showLeftButton={true}
        onPressBack={() => navigation.goBack()}
      />

      {/* SEARCH BAR */}
      <View style={styles.searchContent}>
        <SearchBar
          placeholder={'Cari Berita'}
          setSearchValue={text => setSearchNews(text)}
          searchValue={searchNews}
        />
      </View>

      {/* CONTENT */}
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            data={newsData}
            keyExtractor={item => item._id}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default NewsIndex;
