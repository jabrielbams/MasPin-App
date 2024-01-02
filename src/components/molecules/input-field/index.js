import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';

export default function InputField({
  placeholder,
  focus,
  style,
  title,
  onChangeText,
}) {
  const [isfocus, setFocus] = React.useState(focus);
  return (
    <View>
      <Text style={styles.TitleStyle}>{title}</Text>
      <View
        style={[
          styles.container,
          style,
          isfocus ? styles.focused : styles.notFocused,
        ]}>
        <TextInput
          setFocus={isfocus} //whatever focus state holds
          onChangeText={text => onChangeText(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={styles.textInput}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TitleStyle: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.MEDIUM,
    color: Color.BLACK,
  },
  focused: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.SMALL,
    color: Color.HEADER_GRAY,
    borderColor: Color.PRIMARY,
    borderWidth: 1,
  },
  textInput: {
    borderRadius: 8,
    fontFamily: Fonts.REGULAR,
    width: 340,
  },
  notFocused: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.SMALL,
    color: Color.HEADER_GRAY,
    borderColor: Color.LIGHT_GRAY,
    borderWidth: 1,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  inputStyle: {
    flex: 1,
  },
});
