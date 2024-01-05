import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {InputField, ButtonMain} from '../../components';
import {IcEyeClose, IcEyeOpen} from '../../assets/icons';
import styles from './styles';
import {useRegister} from './useRegister';
import {Color} from '../../constants';

const RegisterScreen = () => {
  const {
    function: {
      onPressShowPassword,
      onPressShowConfirmPassword,
      handleOnChange,
      handleErrorMessage,
      validateInputs,
    },
    showPassword,
    showConfirmPassword,
    inputs,
    errors,
  } = useRegister();

  const ShowPassword = () => (
    <TouchableOpacity onPress={onPressShowPassword}>
      {showPassword ? <IcEyeOpen /> : <IcEyeClose />}
    </TouchableOpacity>
  );

  const ShowConfirmPassword = () => (
    <TouchableOpacity onPress={onPressShowConfirmPassword}>
      {showConfirmPassword ? <IcEyeOpen /> : <IcEyeClose />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View style={styles.scrollViewStyle}>
          <View style={styles.sectionStyle}>
            <Text style={styles.titleStyle}>Buat Akun Maspinmu!</Text>
            <Text style={styles.descStyle}>
              Lengkapi data dibawah untuk bisa melanjutkan.
            </Text>
            <View style={styles.formGroup}>
              <InputField
                title={'Nama Lengkap'}
                placeholder="Masukkan nama lengkap"
                required={true}
                errorMessage={errors.name}
                onFocus={() => {
                  handleErrorMessage(null, 'name');
                }}
                onChangeTextInput={text => handleOnChange(text, 'name')}
              />
              <InputField
                title={'No. Handphone'}
                placeholder="Masukkan nomor"
                required={true}
                keyboardType="numeric"
                errorMessage={errors.phone}
                onFocus={() => {
                  handleErrorMessage(null, 'phone');
                }}
                onChangeTextInput={text => handleOnChange(text, 'phone')}
              />
              <InputField
                title={'Email'}
                placeholder="Masukkan email"
                required={true}
                errorMessage={errors.email}
                onFocus={() => {
                  handleErrorMessage(null, 'email');
                }}
                onChangeTextInput={text => handleOnChange(text, 'email')}
              />
              <InputField
                title={'Password'}
                placeholder="Masukkan password"
                required={true}
                secureTextEntry={showPassword}
                iconRight={<ShowPassword />}
                errorMessage={errors.password}
                onFocus={() => {
                  handleErrorMessage(null, 'password');
                }}
                onChangeTextInput={text => handleOnChange(text, 'password')}
              />
              <InputField
                title={'Konfirmasi Password'}
                placeholder="Ulangi password"
                required={true}
                secureTextEntry={showConfirmPassword}
                iconRight={<ShowConfirmPassword />}
                errorMessage={errors.confirmPass}
                onFocus={() => {
                  handleErrorMessage(null, 'confirmPass');
                }}
                onChangeTextInput={text => handleOnChange(text, 'confirmPass')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.actionSection}>
        <View style={styles.actionButton}>
          <ButtonMain
            onPress={validateInputs}
            title="Daftar"
            style={styles.customButton}
            textStyle={styles.customButtonText}
          />
        </View>
        <View style={styles.actionText}>
          <Text style={styles.descStyle}>Sudah punya akun?</Text>
          <TouchableOpacity
            onPress={() => {
              // press event
            }}>
            <Text style={styles.highlightText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
