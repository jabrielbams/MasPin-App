import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcChevronLeft} from '../../../assets/icons';

export default function BackButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{marginRight: 3}}>
      <IcChevronLeft />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
