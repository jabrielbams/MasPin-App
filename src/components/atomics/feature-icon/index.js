import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconChart} from '../../../assets/icons';
import {Color, FontSize, Fonts} from '../../../constants';

const FeatureIcon = ({onPress, icon, label}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{gap: 8}}>
        {icon}
        <Text style={styles.textStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureIcon;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
    color: Color.TEXTPRIMARY,
    marginHorizontal: 3,
  },
});
