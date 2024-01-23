import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';

const TaxInformation = ({desc, result, descActive, resultActive}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={descActive ? styles.descActive : styles.desc}>{desc}</Text>
        <Text style={resultActive ? styles.descActive : styles.result}>
          {result}
        </Text>
      </View>
      <View style={styles.dashedBorder} />
    </View>
  );
};

export default TaxInformation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  desc: {
    color: Color.TEXTSECONDARY,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_14,
  },
  descActive: {
    color: Color.PRIMARY,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_14,
  },
  result: {
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_14,
  },
  resultActive: {
    color: Color.PRIMARY,
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_14,
  },
  dashedBorder: {
    width: '100%',
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: Color.OUTLINE_GRAY,
    borderStyle: 'dashed',
    marginVertical: 10,
  },
});
