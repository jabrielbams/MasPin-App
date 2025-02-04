import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import {Color, Fonts} from '../../../constants';
import {IcChevronRightActive} from '../../../assets/icons';

export default function SubMenu({title, leftIcon, onPress, isIconHidden}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignContent: 'center',
          gap: 8,
        }}>
        {leftIcon}
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        {isIconHidden ? null : <IcChevronRightActive />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.LIGHT,
    fontSize: 14,
    color: Color.BLACK,
  },
});
