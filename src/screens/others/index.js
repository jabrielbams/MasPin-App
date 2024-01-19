/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  IcChevronLeft,
  IcSearch,
  IconBusRoute,
  IconChartPrice,
  IconReport,
  IconTax,
  IconTelephone,
} from '../../assets/icons';
import {
  FeatureList,
  NotificationIcon,
  SearchBar,
  TaxCardMain,
} from '../../components';
import {Color, FontSize, Fonts} from '../../constants';

const OthersScreen = props => {
  const {route, navigation} = props;
  const {section} = route.params;

  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    {id: 1, name: 'Laporan Masalah'},
    {id: 2, name: 'Pajak Berkendara'},
    {id: 3, name: 'Rute dan Jadwal Bus'},
    {id: 3, name: 'Harga Bahan Pangan'},
    {id: 3, name: 'Telepon Darurat'},
  ]);

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
              <TextInput
                placeholder="Cari Layanan"
                style={{
                  color: Color.TEXTBOX,
                  fontFamily: Fonts.REGULAR,
                  fontSize: FontSize.dp_14,
                  width: '80%',
                }}
              />
            </View>
            <View style={styles.featureList}>
              <FeatureList logo={<IconReport />} title="Laporan Masalah" />
              <FeatureList
                logo={<IconTax />}
                title="Pajak Berkendara"
                onPress={() => {
                  navigation.navigate('Tax', {
                    section: 'Pajak',
                  });
                }}
              />
              <FeatureList
                logo={<IconBusRoute />}
                title="Rute dan Jadwal Bus"
                onPress={() => {
                  navigation.navigate('RuteBus', {
                    section: 'Rute Bus',
                  });
                }}
              />
              <FeatureList
                logo={<IconChartPrice />}
                title="Harga Bahan Pangan"
                onPress={() => {
                  navigation.navigate('HargaPangan', {
                    section: 'Harga Pangan',
                  });
                }}
              />
              <FeatureList logo={<IconTelephone />} title="Telepon Darurat" />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default OthersScreen;
