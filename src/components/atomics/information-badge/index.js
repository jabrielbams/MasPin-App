import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IcMapPins, IcFish, IcHalte} from '../../../assets/icons';
import {Color, FontSize, Fonts} from '../../../constants';

const InformationBadge = ({icon, text, additionText, showAddition, isUsed}) => {
  return (
    <View style={styles.container}>
      {icon}
      {showAddition ? (
        <Text style={styles.additionText} numberOfLines={2}>
          {additionText}
        </Text>
      ) : null}
      <Text style={isUsed ? styles.text : styles.textTwo}>{text}</Text>
    </View>
  );
};

export default InformationBadge;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  additionText: {
    fontFamily: Fonts.BOLD,
    fontSize: FontSize.dp_10,
    color: Color.BLACK,
  },
  text: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_10,
    color: Color.BLACK,
    lineHeight: 22,
  },
  textTwo: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
    color: Color.BLACK,
    lineHeight: 22,
  },
});
