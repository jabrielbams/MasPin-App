import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Color} from '../../../constants';

const LineSchedule = ({dotActive, lineActive}) => {
  return (
    <View style={styles.container}>
      <View style={dotActive ? styles.dotActive : styles.dotDisable} />
      <View style={lineActive ? styles.borderActive : styles.borderDisable} />
    </View>
  );
};

export default LineSchedule;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 3,
  },
  dotActive: {
    backgroundColor: Color.PRIMARY,
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  dotDisable: {
    backgroundColor: Color.OUTLINE_GRAY,
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  borderActive: {
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    width: 2,
    height: 45,
    borderStyle: 'dashed',
  },
  borderDisable: {
    borderWidth: 1,
    borderColor: Color.OUTLINE_GRAY,
    width: 2,
    height: 45,
    borderStyle: 'dashed',
  },
});
