import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackButton} from '../..';
import {IcChevronLeft} from '../../../assets/icons';
import {Color, Fonts} from '../../../constants';

export default function HeaderNavigation({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.headerMain}>
      <IcChevronLeft />
      <Text style={styles.headerText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerText: {
    fontFamily: Fonts.BOLD,
    fontSize: 24,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
});
