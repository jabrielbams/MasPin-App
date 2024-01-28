import {View, Text} from 'react-native';
import React from 'react';
import LineSchedule from '../../atomics/line-schedule';
import BusScheduleCard from '../../molecules/bus-schedule-card';

const BusScheduleLine = ({
  dotActive,
  lineActive,
  halteName,
  timeArrival,
  timeDeparture,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-start', gap: 10}}>
      <LineSchedule dotActive={dotActive} lineActive={lineActive} />
      <BusScheduleCard
        halteName={halteName}
        timeDeparture={timeDeparture}
        timeArrival={timeArrival}
      />
    </View>
  );
};

export default BusScheduleLine;
