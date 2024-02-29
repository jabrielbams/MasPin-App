import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../../constants';
import {IcChevronLeft, IcChevronUp} from '../../../assets/icons';

const DetailNews = props => {
  const {route, navigation} = props;
  const {section} = route.params;
  const {newsData} = route.params;
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
      </View>
      <View style={styles.dividerStyle} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* IMAGE CONTAINER */}
          <View
            style={{
              backgroundColor: Color.OUTLINE_GRAY,
              borderRadius: 8,
              width: '100%',
              height: 175,
            }}>
            <Image
              source={{uri: newsData.gambar_berita}}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 8,
              }}
            />
          </View>
          <Text style={styles.categoryText}>{newsData.kategori}</Text>
          <View>
            <Text style={styles.titleText}>{newsData.judul}</Text>
          </View>
          <View>
            <Text style={{marginTop: 16}}>{newsData.isi.deskripsi}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailNews;

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
    justifyContent: 'flex-start',
    alignItems: 'start',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerText: {
    fontFamily: Fonts.BOLD,
    fontSize: 24,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  categoryText: {
    marginTop: 8,
    color: Color.TEXTSECONDARY,
    fontSize: 10,
    fontFamily: Fonts.LIGHT,
    letterSpacing: 5,
  },
  titleText: {
    marginTop: 8,
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
    marginTop: 16,
    marginBottom: 20,
  },
});
