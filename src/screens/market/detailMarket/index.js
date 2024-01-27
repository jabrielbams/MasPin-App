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
import React, {useState} from 'react';
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

const DetailMarket = props => {
  const {route, navigation} = props;
  const {section} = route.params;

  const [searchItem, setSearchItem] = useState('');

  const dataItem = [
    {
      id: 1,
      itemsImg: require('../../../assets/images/img-cabai-merah.jpg'),
      itemsName: 'Cabai Merah',
      itemsPrice: 'Rp 10.000',
      itemsQty: 'kg',
      itemsCategory: 'Cabai',
    },
    {
      id: 2,
      itemsImg: require('../../../assets/images/img-bawang-merah.jpg'),
      itemsName: 'Bawang Merah',
      itemsPrice: 'Rp 12.000',
      itemsQty: 'kg',
      itemsCategory: 'Bawang',
    },
    {
      id: 3,
      itemsImg: require('../../../assets/images/img-beras.jpg'),
      itemsName: 'Beras',
      itemsPrice: 'Rp 15.000',
      itemsQty: 'kg',
      itemsCategory: 'Beras',
    },
    {
      id: 4,
      itemsImg: require('../../../assets/images/img-kentang.jpg'),
      itemsName: 'Kentang',
      itemsPrice: 'Rp 8.000',
      itemsQty: 'kg',
      itemsCategory: 'Kentang',
    },
    {
      id: 5,
      itemsImg: require('../../../assets/images/img-gula-merah.jpg'),
      itemsName: 'Gula Merah',
      itemsPrice: 'Rp 12.000',
      itemsQty: 'kg',
      itemsCategory: 'Gula',
    },
    {
      id: 6,
      itemsImg: require('../../../assets/images/img-bawang-putih.jpg'),
      itemsName: 'Bawang Putih',
      itemsPrice: 'Rp 18.000',
      itemsQty: 'kg',
      itemsCategory: 'Bawang',
    },
    {
      id: 7,
      itemsImg: require('../../../assets/images/img-telur.jpg'),
      itemsName: 'Telur',
      itemsPrice: 'Rp 15.000',
      itemsQty: 'kg',
      itemsCategory: 'Telur',
    },
    {
      id: 8,
      itemsImg: require('../../../assets/images/img-paha-ayam.jpg'),
      itemsName: 'Paha Ayam',
      itemsPrice: 'Rp 25.000',
      itemsQty: 'kg',
      itemsCategory: 'Ayam',
    },
  ];

  const filteredItems = dataItem.filter(dataItem =>
    dataItem.itemsName.toLowerCase().includes(searchItem.toLowerCase()),
  );

  const renderCard = ({item}) => (
    <CardItemsMain
      itemsCategory={item.itemsCategory}
      itemsImg={item.itemsImg}
      itemsName={item.itemsName}
      itemsPrice={item.itemsPrice}
      itemsQty={item.itemsQty}
    />
  );

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
      <View style={styles.content}>
        <FlatList
          data={filteredItems}
          keyExtractor={item => item.id}
          renderItem={renderCard}
          numColumns={2}
          contentContainerStyle={{
            marginTop: 16,
            gap: 12,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DetailMarket;
