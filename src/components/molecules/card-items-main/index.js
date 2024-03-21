import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';
import {ImgCabaiMerah} from '../../../assets/images';

const CardItemsMain = ({
  itemsImg,
  itemsName,
  itemsPrice,
  itemsQty,
  itemsCategory,
  isLastItem,
}) => {
  return (
    <View style={[styles.container, isLastItem && styles.lastItem]}>
      <View style={styles.imageContainer}>
        <Image source={{uri: itemsImg}} style={styles.image} />

        {/* <View style={styles.itemsCategory}>
          <Text style={styles.categoryText}>{itemsCategory}</Text>
        </View> */}
      </View>
      <Text style={styles.itemsName}>{itemsName}</Text>
      <View style={styles.priceBox}>
        <Text style={styles.price}>{itemsPrice}</Text>
        <View style={styles.qtyBox} />
        <Text style={styles.qty}>{itemsQty}</Text>
      </View>
    </View>
  );
};

export default CardItemsMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    elevation: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    margin: 5,
    flexDirection: 'column',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 16 / 9,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  itemsName: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
    marginTop: 5,
  },
  lastItem: {
    flex: 0.5,
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  price: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_12,
    color: Color.BLACK,
  },
  qtyBox: {
    backgroundColor: Color.PRIMARY,
    width: 2,
    height: '65%',
  },
  qty: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_12,
    color: Color.PRIMARY,
  },
  itemsCategory: {
    top: 3,
    position: 'absolute',
    paddingVertical: 4,
    backgroundColor: Color.PRIMARY,
    borderRadius: 50,
    width: 67,
  },
  categoryText: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.dp_12,
    color: Color.WHITE,
    textAlign: 'center',
  },
});
