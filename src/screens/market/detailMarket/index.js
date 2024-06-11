import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IcChevronLeft, IcSearch} from '../../../assets/icons';
import {
  HeaderMain,
  MarketCard,
  NotificationIcon,
  SearchBar,
} from '../../../components';
import {
  ImgBawang,
  ImgBawangMerah,
  ImgCabai,
  ImgCabaiMerah,
  ImgTelurFix,
} from '../../../assets/images';
import {Color, FontSize, Fonts} from '../../../constants';
import styles from './styles';
import CardItemsMain from '../../../components/molecules/card-items-main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ENDPOINT} from '../../../utils/endpoint';

const DetailMarket = props => {
  const {route, navigation} = props;
  const {section} = route.params;
  const {dataMarket} = route.params;

  const [loading, setLoading] = useState(false);

  const [searchItem, setSearchItem] = useState('');
  const [dataItem, setDataItem] = useState();
  const [isTwoItems, setIsTwoItems] = useState(false);

  const getItems = async (searchQuery = '') => {
    setLoading(true);
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const idPasar = dataMarket[0]._id;
      const response = await axios.get(
        `${ENDPOINT.MARKET.GET_DETAIL}/${idPasar}?nama_barang=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );
      setDataItem(response.data.data);
      setIsTwoItems(response.data.data.length === 2);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderCard = ({item, index}) => (
    <CardItemsMain
      key={item._id}
      itemsImg={item.gambar_barang}
      itemsName={item.nama_barang}
      itemsPrice={item.harga_barang}
      itemsQty={item.satuan}
      // itemsCategory={item.category_barang}
      isLastItem={index === dataItem.length - 1 && !isTwoItems}
    />
  );

  const searchAndUpdate = searchQuery => {
    getItems(searchQuery);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return `${day} ${getMonthName(month)} ${year}`;
  };

  const getMonthName = month => {
    const monthNames = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    return monthNames[month - 1];
  };

  useEffect(() => {
    searchAndUpdate('');
  }, []);

  useEffect(() => {
    getItems(searchItem);
  }, [searchItem]);

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderMain
        sectionTitle={section}
        showLeftButton={true}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        {/* Search Box */}
        <SearchBar
          placeholder="Cari bahan"
          setSearchValue={text => setSearchItem(text)}
          searchValue={searchItem}
        />

        {/* Daftar Harga */}
        <View style={{marginTop: 24}}>
          <View style={styles.sectionBox}>
            <Text style={styles.daftarHarga}>Daftar Harga</Text>
            <View style={styles.dateBox}>
              <Text style={{color: Color.PRIMARY}}>{getCurrentDate()}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Item List */}
      <View style={styles.contentItems}>
        <FlatList
          data={dataItem}
          keyExtractor={item => item._id}
          renderItem={renderCard}
          numColumns={2}
          contentContainerStyle={styles.itemStyle}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DetailMarket;
