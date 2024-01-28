import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackButton} from '../..';
import {IcChevronLeft} from '../../../assets/icons';
import {Color, Fonts} from '../../../constants';

export default function HeaderNavigation({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.title}>
        <IcChevronLeft />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  headerText: {
    fontFamily: Fonts.BOLD,
    fontSize: 22,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
});
