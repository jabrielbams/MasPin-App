import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';

export default function InputField({
  placeholder,
  focus,
  style,
  title,
  onChangeText,
  secureTextEntry,
}) {
  const [isFocus, setFocus] = React.useState(focus);
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <View
        style={[
          styles.container,
          style,
          isFocus ? styles.focused : styles.notFocused,
        ]}>
        <TextInput
          setFocus={isFocus} //whatever focus state holds
          onChangeText={text => onChangeText(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={Color.TEXTPRIMARY}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
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
    color: Color.TEXTPRIMARY,
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
