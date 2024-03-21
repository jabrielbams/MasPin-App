import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';
import {IcChevronLeft, IcChevronUp} from '../../../assets/icons';
import styles from './styles';
import {HeaderMain} from '../../../components';

const DetailNews = props => {
  const {route, navigation} = props;
  const {section} = route.params;
  const {newsData} = route.params;

  const capitalizeText = text => {
    return text.toUpperCase();
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

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderMain
        sectionTitle={section}
        showLeftButton={true}
        onPressBack={() => navigation.goBack()}
      />

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <View style={styles.imgContainer}>
          <Image
            source={{uri: newsData.gambar_berita}}
            style={styles.imgStyle}
            resizeMode="cover"
          />
        </View>

        <View style={styles.content}>
          {/* Body */}
          <View>
            {/* Category Date */}
            <View style={styles.info}>
              <Text style={styles.categoryText(false)}>
                {capitalizeText(newsData.kategori)}
              </Text>
              <Text style={styles.categoryText(true)}>{getCurrentDate()}</Text>
            </View>

            {/* News Content */}
            <View style={{gap: 20}}>
              <Text style={styles.titleText}>{newsData.judul}</Text>
              <Text style={styles.textDesc}>{newsData.isi.deskripsi}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailNews;
