import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../../constants';

export default function LabelCategory({title}) {
  return (
    <View style={styles.SectionStyle}>
      <View style={styles.container}>
        <Text style={styles.status}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.PRIMARY_LIGHT,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  status: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 10,
    color: Color.PRIMARY,
  },
});
