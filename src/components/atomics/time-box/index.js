import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';

const TimeBox = ({time}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time}</Text>
      <Text style={styles.text}>WIB</Text>
    </View>
  );
};

export default TimeBox;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: 4},
  text: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.TEXTPRIMARY,
  },
});
