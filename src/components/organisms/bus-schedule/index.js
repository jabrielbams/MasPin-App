import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IcClock, IcHalte} from '../../../assets/icons';
import {Color, FontSize, Fonts} from '../../../constants';
import {InformationBadge, TimeBox} from '../..';

const BusSchedule = ({departure, arrival, halteName}) => {
  return (
    <View>
      <InformationBadge
        icon={<IcHalte />}
        showAddition={false}
        text={halteName}
        isUsed={false}
      />
      <TimeBox departure={departure} arrival={arrival} />
    </View>
  );
};

export default BusSchedule;

const styles = StyleSheet.create({
  busName: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_10,
    color: Color.BLACK,
    lineHeight: 22,
  },
});
