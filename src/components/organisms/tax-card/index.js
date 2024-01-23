import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {IcChevronRightActive, IconMotorcycle} from '../../../assets/icons';
import {Color, FontSize, Fonts} from '../../../constants';

const TaxCardMain = ({title, descDetail, iconRight, iconDetail, onPress}) => {
  return (
    <View style={styles.container}>
      {iconRight}
      <View>
        <Text style={styles.title}>{title}</Text>
        <View>
          <TouchableOpacity style={styles.detail} onPress={onPress}>
            <Text style={styles.desc}>{descDetail}</Text>
            {iconDetail}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaxCardMain;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: Color.WHITE,
    padding: 12,
    elevation: 1,
    borderRadius: 8,
  },
  title: {
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_14,
    marginBottom: 8,
  },
  desc: {
    color: Color.PRIMARY,
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.MEDIUM,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
