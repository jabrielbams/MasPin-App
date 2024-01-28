import {View, Text} from 'react-native';
import React from 'react';
import HalteBoxCard from '../../atomics/halte-card';
import BusScheduleTime from '../time-schedule-bus';

const BusScheduleCard = ({halteName, timeArrival, timeDeparture}) => {
  return (
    <View style={{flexDirection: 'column', gap: 7}}>
      <HalteBoxCard halteName={halteName} />
      <BusScheduleTime
        timeArrival={timeArrival}
        timeDeparture={timeDeparture}
      />
    </View>
  );
};

export default BusScheduleCard;
