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
import {IcChevronLeft, IcSearch} from '../../assets/icons';
import {MarketCard, NotificationIcon} from '../../components';
import {ImgBawang} from '../../assets/images';
import {Color, FontSize, Fonts} from '../../constants';

const DetailMarket = ({navigation}) => {
  const [searchMarket, setSearchMarket] = useState('');

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
            <Text style={styles.headerText}>Harga</Text>
          </View>
          <NotificationIcon style={{marginLeft: 'auto'}} />
        </View>
        <View style={styles.dividerStyle} />
        <View style={styles.content}>
          <View style={styles.searchBox}>
            <IcSearch />
            <TextInput
              placeholder="Cari pasar"
              style={styles.placeholder}
              onChangeText={text => setSearchMarket(text)}
            />
          </View>
          <View style={{marginTop: 24, flexDirection: 'column', gap: 20}}>
            <View style={styles.card}>
              <Image source={ImgBawang} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailMarket;

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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerText: {
    fontFamily: Fonts.BOLD,
    fontSize: 24,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  searchBox: {
    backgroundColor: Color.TEXTFIELD,
    flexDirection: 'row',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 16,
  },
  placeholder: {
    color: Color.TEXTBOX,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_14,
    width: '80%',
  },

  card: {},
});
