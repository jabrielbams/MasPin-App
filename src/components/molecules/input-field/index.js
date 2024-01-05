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
  iconRight,
  errorMessage,
  onChangeTextInput,
  value,
  keyboardType,
  required,
  onFocus,
}) {
  const [isFocus, setFocus] = React.useState(focus);
  return (
    <View>
      <View style={styles.titleSection}>
        <Text style={styles.titleStyle}>{title}</Text>
        {required ? <Text style={styles.required}>*</Text> : null}
      </View>
      <View
        style={[
          styles.container,
          style,
          {
            borderColor: errorMessage
              ? Color.DANGER
              : isFocus
              ? Color.PRIMARY
              : Color.LIGHT_GRAY,
          },
        ]}>
        <TextInput
          // setFocus={isFocus}
          autoCorrect={false}
          onChangeText={onChangeTextInput}
          value={value}
          onFocus={() => {
            onFocus();
            setFocus(true);
          }}
          onBlur={() => setFocus(false)}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={Color.TEXTPRIMARY}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {iconRight && <View>{iconRight}</View>}
      </View>
      {errorMessage && (
        <View style={styles.errorMsgSection}>
          <Text style={styles.errorMsg} numberOfLines={2}>
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 14,
  },
  titleStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },
  required: {
    color: Color.DANGER,
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
    borderColor: Color.LIGHT_GRAY,
    borderWidth: 1,
  },
  inputStyle: {
    flex: 1,
  },
  errorMsgSection: {
    marginTop: 8,
  },
  errorMsg: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.DANGER,
  },
});
