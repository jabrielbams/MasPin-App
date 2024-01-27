import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IcClock} from '../../../assets/icons';
import {Color, FontSize, Fonts} from '../../../constants';

const TimeBox = ({departure, arrival}) => {
  return (
    <View style={styles.container}>
      <IcClock />
      <View style={styles.time}>
        <Text style={styles.text}>{departure}</Text>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>{arrival}</Text>
      </View>
    </View>
  );
};

export default TimeBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingTop: 3,
  },
  text: {
    color: Color.TEXTPRIMARY,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
  },
});
