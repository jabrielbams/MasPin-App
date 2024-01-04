import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../../constants';
import {IcCheckCircle, IcSpinner} from '../../../assets';

export default function LabelCategory({type}) {
  let containerStyle, textStyle, iconComponent;
  switch (type) {
    case 1:
      title = 'Menunggu';
      containerStyle = styles.containerWaiting;
      textStyle = styles.statusWaiting;
      iconComponent = null;
      break;
    case 2:
      title = 'Diproses';
      containerStyle = styles.containerProcess;
      textStyle = styles.statusProcess;
      iconComponent = <IcSpinner />;
      break;
    case 3:
      title = 'Selesai';
      containerStyle = styles.containerSuccess;
      textStyle = styles.statusSuccess;
      iconComponent = <IcCheckCircle />;
      break;
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.status, textStyle]}>{title}</Text>
      {iconComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  status: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 10,
  },
  containerWaiting: {
    backgroundColor: Color.LIGHT_RED,
  },
  statusWaiting: {
    color: Color.RED,
  },
  containerProcess: {
    backgroundColor: Color.LIGHT_YELLOW,
  },
  statusProcess: {
    color: Color.YELLOW,
  },
  containerSuccess: {
    backgroundColor: Color.LIGHT_GREEN,
  },
  statusSuccess: {
    color: Color.GREEN,
  },
});
