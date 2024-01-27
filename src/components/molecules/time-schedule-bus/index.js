/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TimeBox} from '../..';
import {IcClock} from '../../../assets/icons';
import {FontSize, Fonts, Color} from '../../../constants';

const BusScheduleTime = ({timeDeparture, timeArrival}) => {
  return (
    <View style={styles.container}>
      <IcClock />
      <View style={styles.innerBox}>
        <TimeBox time={timeDeparture} />
        <Text style={styles.text}>-</Text>
        <TimeBox time={timeArrival} />
      </View>
    </View>
  );
};

export default BusScheduleTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingTop: 3,
  },
  text: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.TEXTPRIMARY,
  },
});
