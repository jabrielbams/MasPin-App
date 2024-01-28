/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import BusScheduleTime from '../time-schedule-bus';
import {HalteBoxCard} from '../..';

const BusScheduleCard = ({halteName, timeArrival, timeDeparture}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 6,
      }}>
      <HalteBoxCard halteName={halteName} />
      <BusScheduleTime
        timeArrival={timeArrival}
        timeDeparture={timeDeparture}
      />
    </View>
  );
};

export default BusScheduleCard;
