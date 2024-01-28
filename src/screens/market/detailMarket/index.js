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
import {MarketCard, NotificationIcon} from '../../../components';
import {
  ImgBawang,
  ImgBawangMerah,
  ImgCabai,
  ImgCabaiMerah,
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
      isLastItem={index === dataItem.length - 1 && !isTwoItems}
    />
  );

  const searchAndUpdate = searchQuery => {
    getItems(searchQuery);
  };

  useEffect(() => {
    searchAndUpdate('');
  }, []);

  useEffect(() => {
    getItems(searchItem);
  }, [searchItem]);

  return (
    <View style={styles.mainBody}>
      <View style={styles.headerMain}>
        <View style={styles.title}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <IcChevronLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>{section}</Text>
        </View>
        <NotificationIcon style={{marginLeft: 'auto'}} />
      </View>
      <View style={styles.dividerStyle} />
      <View style={styles.content}>
        {/* Search Box */}
        <View style={styles.searchBox}>
          <IcSearch />
          <TextInput
            placeholder="Cari bahan"
            style={styles.placeholder}
            onChangeText={text => setSearchItem(text)}
            value={searchItem}
          />
        </View>

        {/* Daftar Harga */}
        <View
          style={{
            marginTop: 24,
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontFamily: Fonts.MEDIUM,
                fontSize: FontSize.dp_16,
                color: Color.BLACK,
              }}>
              Daftar Harga
            </Text>
            <View
              style={{
                backgroundColor: Color.DISABLE,
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: Color.PRIMARY}}>12 Januari 2024</Text>
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
          contentContainerStyle={{
            flexGrow: 1, // Tambahkan flexGrow untuk memastikan FlatList mengisi ruang yang tersedia
            paddingBottom: 28, // Tambahkan padding di bagian bawah untuk menghindari pemotongan data
            marginTop: 16,
            paddingHorizontal: 8,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DetailMarket;
