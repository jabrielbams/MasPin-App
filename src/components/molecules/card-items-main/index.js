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
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 13,
          width: 130,
        }}>
        <Image source={itemsImg} style={{resizeMode: 'cover'}} />
        <View style={styles.itemsCategory}>
          <Text style={styles.categoryText}>{itemsCategory}</Text>
        </View>
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
    backgroundColor: Color.WHITE,
    elevation: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    margin: 5,
  },
  itemsName: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
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
    position: 'absolute',
    top: 6,
    left: -4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.PRIMARY,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  categoryText: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.dp_12,
    color: Color.WHITE,
  },
});
