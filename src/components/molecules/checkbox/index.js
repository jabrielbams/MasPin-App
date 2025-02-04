import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomCheckbox({
  title,
  isChecked,
  onPress,
  colorStyle,
}) {
  const iconCheck = isChecked ? 'check-box' : 'check-box-outline-blank';
  return (
    <View>
      <View style={styles.checkbox}>
        <Pressable onPress={onPress}>
          <Icon
            name={iconCheck}
            size={24}
            color={isChecked ? Color.PRIMARY : Color.BLACK ? colorStyle : null}
          />
        </Pressable>
        <Text style={styles.checkboxText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkboxText: {
    fontSize: 14,
    fontFamily: Fonts.LIGHT,
    color: Color.HEADER_GRAY,
  },
});
