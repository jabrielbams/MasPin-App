import {View, Text} from 'react-native';
import React from 'react';
import LineSchedule from '../../atomics/line-schedule';
import BusScheduleCard from '../../molecules/bus-schedule-card';

const HalteScheduleCard = ({
  dotActive,
  lineActive,
  halteName,
  timeArrival,
  timeDeparture,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-start', gap: 8}}>
      <LineSchedule dotActive={dotActive} lineActive={lineActive} />
      <BusScheduleCard
        halteName={halteName}
        timeArrival={timeArrival}
        timeDeparture={timeDeparture}
      />
    </View>
  );
};

export default HalteScheduleCard;
