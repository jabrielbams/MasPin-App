/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IcBus} from '../../../assets/icons';
import {FontSize, Color, Fonts} from '../../../constants';

const HalteBoxCard = ({halteName}) => {
  return (
    <View style={styles.container}>
      <IcBus />
      <Text style={styles.text}>{halteName}</Text>
    </View>
  );
};

export default HalteBoxCard;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: 7},
  text: {
    fontSize: FontSize.dp_14,
    color: Color.BLACK,
    fontFamily: Fonts.REGULAR,
    paddingTop: 3,
  },
});
