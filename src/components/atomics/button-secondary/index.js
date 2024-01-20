import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../../constants';

export default function ButtonSecondary({
  onPress,
  onLongPress,
  title,
  iconLeft,
  iconRight,
  style,
  textStyle,
  disabled,
  activeOpacity,
  loading,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[disabled ? styles.disabledButton : styles.button, style]}>
      {iconLeft}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      {iconRight}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: Color.OUTLINE_GRAY,
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  disabledButton: {
    backgroundColor: 'grey',
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: Color.WHITE,
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
  },
});
