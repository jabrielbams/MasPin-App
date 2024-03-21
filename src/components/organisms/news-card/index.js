import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImgBisTrans, ImgNewsCovid} from '../../../assets/images';
import {Color, FontSize, Fonts} from '../../../constants';

const NewsCardMain = ({category, titleNews, descNews, imageNews, onPress}) => {
  const capitalizedValue = category.toUpperCase();

  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={{uri: imageNews}} style={styles.imgView} />
      <View style={styles.descSection}>
        <Text style={styles.category} numberOfLines={1} autoCapitalization>
          {capitalizedValue}
        </Text>
        <Text style={styles.titleNews} numberOfLines={2}>
          {titleNews}
        </Text>
        <Text style={styles.descNews} numberOfLines={4}>
          {descNews}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCardMain;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    flexDirection: 'row',
    elevation: 2,
    flex: 1,
    height: 160,
    marginBottom: 16,
  },
  imgView: {
    width: 100,
    height: 160,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  category: {
    color: Color.TEXTSECONDARY,
    fontSize: FontSize.dp_10,
    fontFamily: Fonts.LIGHT,
    letterSpacing: 5,
    marginBottom: 4,
  },
  descSection: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  titleNews: {
    color: Color.BLACK,
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.SEMIBOLD,
    marginBottom: 20,
  },
  descNews: {
    color: Color.TEXTSECONDARY,
    fontSize: FontSize.dp_10,
    fontFamily: Fonts.REGULAR,
  },
});
