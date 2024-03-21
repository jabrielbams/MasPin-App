import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IcChevronLeft, IcFish, IcMapPins, IcSearch} from '../../assets/icons';
import {
  HeaderMain,
  LoadingIndicator,
  MarketCard,
  NotificationIcon,
  SearchBar,
} from '../../components';
import styles from './styles';
import {
  ImgPasarBms,
  ImgPasarManis,
  ImgPasarPon,
  ImgPasarWage,
} from '../../assets/images';
import DetailMarket from './detailMarket';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ENDPOINT} from '../../utils/endpoint';

const HargaPangan = props => {
  const {route, navigation} = props;
  const {section} = route.params;

  const [loading, setLoading] = useState(false);

  const [searchMarket, setSearchMarket] = useState('');
  const [dataMarket, setDataMarket] = useState();

  const getMarketList = async searchQuery => {
    setLoading(true);
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const response = await axios.get(
        `${ENDPOINT.MARKET.GET_PASAR}?nama_pasar=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );
      setDataMarket(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderCard = ({item}) => (
    <MarketCard
      key={item._id}
      onPress={() => {
        navigation.navigate('DetailMarket', {
          section: 'Harga Pangan',
          dataMarket: dataMarket,
        });
      }}
      imgSource={item.gambar_pasar}
      marketName={item.nama_pasar}
      iconLeft={<IcMapPins />}
      textDesc={item.lokasi_pasar}
      iconLeftTwo={<IcFish />}
      textDescTwo={item.detail_pasar}
      showAddition={true}
      additionText={item.additionText}
    />
  );

  // const filteredMarket = dataMarket.filter(
  //   dataMarket =>
  //     dataMarket.marketName
  //       .toLowerCase()
  //       .includes(searchMarket.toLowerCase()) ||
  //     dataMarket.textDesc.toLowerCase().includes(searchMarket.toLowerCase()),
  // );

  useEffect(() => {
    getMarketList(searchMarket);
  }, [searchMarket]);

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderMain
        sectionTitle={section}
        showLeftButton={true}
        onPressBack={() => navigation.goBack()}
      />

      {/* CONTENT LIST */}
      <View style={styles.content}>
        <SearchBar
          placeholder="Cari pasar"
          setSearchValue={text => setSearchMarket(text)}
          searchValue={searchMarket}
        />
        <View style={{marginTop: 24, flexDirection: 'column', gap: 20}}>
          <FlatList
            data={dataMarket}
            keyExtractor={item => item._id}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      {loading && <LoadingIndicator />}
    </View>
  );
};

export default HargaPangan;
