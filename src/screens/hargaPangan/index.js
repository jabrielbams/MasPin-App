import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {IcChevronLeft, IcFish, IcMapPins, IcSearch} from '../../assets/icons';
import {MarketCard, NotificationIcon} from '../../components';
import styles from './styles';
import {
  ImgPasarBms,
  ImgPasarManis,
  ImgPasarPon,
  ImgPasarWage,
} from '../../assets/images';

const HargaPangan = props => {
  const {route, navigation} = props;
  const {section} = route.params;

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.searchBox}>
              <IcSearch />
              <TextInput placeholder="Cari Pasar" style={styles.placeholder} />
            </View>
            <View style={{marginTop: 24, flexDirection: 'column', gap: 20}}>
              <MarketCard
                imgSource={ImgPasarWage}
                marketName="Pasar Wage"
                iconLeft={IcMapPins}
                textDesc="Jl. Vihara, Purwokerto Wetan"
                iconLeftTwo={IcFish}
                textDescTwo="detail harga pangan"
                showAddition={true}
                additionText="50"
              />
              <MarketCard
                imgSource={ImgPasarManis}
                marketName="Pasar Manis"
                iconLeft={IcMapPins}
                textDesc="Jl. Jend. Gatot Subroto, Purwokerto Barat"
                iconLeftTwo={IcFish}
                textDescTwo="detail harga pangan"
                showAddition={true}
                additionText="30"
              />
              <MarketCard
                imgSource={ImgPasarPon}
                marketName="Pasar Pon"
                iconLeft={IcMapPins}
                textDesc="Bantarsoka, Purwokerto Barat"
                iconLeftTwo={IcFish}
                textDescTwo="detail harga pangan"
                showAddition={true}
                additionText="20"
              />
              <MarketCard
                imgSource={ImgPasarBms}
                marketName="Pasar Banyumas"
                iconLeft={IcMapPins}
                textDesc="Jl. Gatot Subroto, Banyumas"
                iconLeftTwo={IcFish}
                textDescTwo="detail harga pangan"
                showAddition={true}
                additionText="50"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HargaPangan;
