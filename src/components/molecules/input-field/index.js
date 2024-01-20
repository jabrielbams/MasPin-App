import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, FontSize, Fonts} from '../../../constants';
import {setPhoneNumber} from '../../../utils/helpers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcEyeClose, IcEyeOpen} from '../../../assets/icons';

export default function InputField({
  type = 'default',
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  required,
  onFocus,
  label,
  labelMini,
  helper,
  containerStyle,
  formStyle,
  labelStyle,
  inputStyle,
  height,
  editable = true,
  keyboardType,
  onBlur,
  maxLength,
  inputMode,
  customIcon,
  maxInputLength,
}) {
  const [isRender, setIsRender] = useState(false);
  const [hint, setHint] = useState(helper);
  const [secure, setSecure] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  useEffect(() => {
    if (isRender) {
      setHint(helper);
    }
  }, [isRender, helper]);

  const handleChangeValue = value => {
    let valueText = value;

    if (type === 'phone-number') {
      valueText = setPhoneNumber(value);
    } else if (type === 'nik') {
      // Remove non-numeric characters from NIK
      valueText = value.replace(/[^0-9]/g, '');
    }
    onChangeText?.(valueText);
  };

  const setType = type => {
    switch (type) {
      case 'password':
        return 'default';
      case 'phone-number':
        return 'number-pad';
      case 'text-area':
        return 'default';
      default:
        return type;
    }
  };

  return (
    <View>
      <View style={styles.titleSection}>
        {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
        {required ? <Text style={{color: Color.DANGER}}>*</Text> : null}
      </View>
      <View
        style={[
          styles.form,
          formStyle,
          hint ? styles.formErr : null,
          !editable ? styles.formDisabled : null,
        ]}>
        <TextInput
          defaultValue={type === 'phone-number' ? setPhoneNumber(value) : value}
          value={type === 'phone-number' ? setPhoneNumber(value) : value}
          keyboardType={
            type === 'phone-number' || type === 'nik'
              ? 'number-pad'
              : setType(type)
          }
          style={[
            styles.input,
            inputStyle,
            type === 'text-area'
              ? [styles.textArea, height ? {height: height} : null]
              : null,
          ]}
          placeholder={placeholder}
          placeholderTextColor={Color.TEXTPRIMARY}
          secureTextEntry={secure}
          multiline={type === 'text-area' ? true : false}
          numberOfLines={type === 'text-area' ? 4 : 1}
          autoCapitalize={type === 'email-address' ? 'none' : 'sentences'}
          editable={editable}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChangeText={handleChangeValue}
          maxLength={maxInputLength}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            {secure ? <IcEyeClose /> : <IcEyeOpen />}
          </TouchableOpacity>
        )}
      </View>
      {hint ? <Text style={styles.helper}>{hint}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 8,
  },
  labelStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },
  textInput: {
    borderRadius: 8,
    fontFamily: Fonts.REGULAR,
    width: 340,
    color: Color.TEXTPRIMARY,
  },
  form: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: 50,
    borderColor: Color.LIGHT_GRAY,
    borderRadius: 8,
    borderWidth: 1,
  },
  inputStyle: {
    flex: 1,
  },
  textArea: {
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  formErr: {
    borderColor: Color.DANGER,
  },
  helper: {
    fontFamily: Fonts.LIGHT,
    fontSize: FontSize.dp_12,
    color: Color.DANGER,
    marginTop: 8,
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
