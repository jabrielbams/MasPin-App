import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontSize, Fonts, Color} from '../../../constants';
import {InformationBadge} from '../..';

const MarketCard = ({
  onPress,
  imgSource,
  marketName,
  iconLeft,
  textDesc,
  iconLeftTwo,
  textDescTwo,
  showAddition,
  additionText,
  addition,
  additionDesc,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: imgSource}} style={styles.imgStyle} />
      <View style={styles.identitySection}>
        <Text style={styles.title} numberOfLines={1}>
          {marketName}
        </Text>
        <View>
          <InformationBadge icon={iconLeft} text={textDesc} />
          <InformationBadge
            icon={iconLeftTwo}
            text={textDescTwo}
            showAddition={showAddition}
            additionText={additionText}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MarketCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 15,
  },
  imgStyle: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Fonts.dp_16,
    color: Color.BLACK,
  },
  additionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  additionText: {
    fontFamily: Fonts.BOLD,
    fontSize: FontSize.dp_10,
    color: Color.BLACK,
  },
  desc: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_10,
    color: Color.BLACK,
  },
  identitySection: {
    flexDirection: 'column',
    gap: 10,
    flex: 1,
  },
});
