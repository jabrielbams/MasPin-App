import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import {Color, Fonts} from '../../../constants';
import {IcChevronRightActive} from '../../../assets/icons';

export default function CardSubMenu({title, leftIcon, onPress, isIconHidden}) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 8,
            }}>
            {leftIcon}
            <Text style={styles.title}>{title}</Text>
          </View>
          {isIconHidden ? null : <IcChevronRightActive />}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 12,
    elevation: 0.5,
    backgroundColor: Color.WHITE,
  },
  title: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: 16,
    color: Color.BLACK,
    lineHeight: 24,
  },
});
