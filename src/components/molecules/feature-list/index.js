import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {IcChevronRight, IconReport} from '../../../assets/icons';
import {Color, FontSize, Fonts} from '../../../constants';

const FeatureList = ({logo, title, iconRight, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textLogo}>
        {logo}
        <Text style={styles.text}>{title}</Text>
      </View>
      {<IcChevronRight />}
    </TouchableOpacity>
  );
};

export default FeatureList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.WHITE,
    elevation: 1,
    borderRadius: 8,
    height: 65,
    paddingHorizontal: 12,
  },
  textLogo: {flexDirection: 'row', gap: 20, alignItems: 'center'},
  text: {
    color: Color.BLACK,
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.dp_16,
  },
});
