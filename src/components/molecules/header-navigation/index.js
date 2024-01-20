import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackButton} from '../..';
import {IcChevronLeft} from '../../../assets/icons';
import {Color, Fonts} from '../../../constants';

export default function HeaderNavigation({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.icon}>
        <IcChevronLeft />
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: 20,
    color: Color.BLACK,
  },
});
