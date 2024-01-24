import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {IcChevronLeft, IcFish, IcMapPins, IcSearch} from '../../assets/icons';
import {
  ButtonMain,
  MarketCard,
  ModalPopup,
  NotificationIcon,
} from '../../components';
import styles from './styles';
import {
  ImgModalSuccess,
  ImgModalWarning,
  ImgPasarBms,
  ImgPasarManis,
  ImgPasarPon,
  ImgPasarWage,
} from '../../assets/images';
import {Color, FontSize, Fonts} from '../../constants';

const HargaPangan = props => {
  const {route, navigation} = props;
  const {section} = route.params;

  const [searchMarket, setSearchMarket] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  const dataMarket = [
    {
      id: 1,
      marketName: 'Pasar Wage',
      textDesc: 'Jl. Vihara, Purwokerto Wetan',
      textDescTwo: 'detail harga pangan',
      additionText: '50',
      img: require('../../assets/images/img-pasar-wage.jpg'),
    },
    {
      id: 2,
      marketName: 'Pasar Manis',
      textDesc: 'Jl. Jend. Gatot Subroto, Purwokerto Barat',
      textDescTwo: 'detail harga pangan',
      additionText: '40',
      img: require('../../assets/images/img-pasar-manis.jpg'),
    },
    {
      id: 3,
      marketName: 'Pasar Pon',
      textDesc: 'Bantarsoka, Purwokerto Barat',
      textDescTwo: 'detail harga pangan',
      additionText: '20',
      img: require('../../assets/images/img-pasar-pon.jpg'),
    },
    {
      id: 4,
      marketName: 'Pasar Banyumas',
      textDesc: 'Jl. Gatot Subroto, Banyumas',
      textDescTwo: 'detail harga pangan',
      additionText: '30',
      img: require('../../assets/images/img-pasar-bms.jpg'),
    },
  ];

  const filteredMarket = dataMarket.filter(
    dataMarket =>
      dataMarket.marketName
        .toLowerCase()
        .includes(searchMarket.toLowerCase()) ||
      dataMarket.textDesc.toLowerCase().includes(searchMarket.toLowerCase()),
  );

  return (
    <View style={styles.mainBody}>
      <View>
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.searchBox}>
              <IcSearch />
              <TextInput
                placeholder="Cari pasar"
                style={styles.placeholder}
                value={searchMarket}
                onChangeText={text => setSearchMarket(text)}
              />
            </View>
          </ScrollView>
          <View style={{marginTop: 24, flexDirection: 'column', gap: 20}}>
            <FlatList
              data={filteredMarket}
              keyExtractor={item => item._id}
              renderItem={({item}) => (
                <MarketCard
                  imgSource={item.img}
                  marketName={item.marketName}
                  iconLeft={IcMapPins}
                  textDesc={item.textDesc}
                  iconLeftTwo={IcFish}
                  textDescTwo={item.textDescTwo}
                  showAddition={true}
                  additionText={item.additionText}
                  onPress={() => setModalVisible(true)}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HargaPangan;
