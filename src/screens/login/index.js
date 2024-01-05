import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ButtonMain, CustomCheckbox, InputField} from '../../components';
import {Color, Fonts} from './src/constants';
import {useLogin} from './useLogin';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const {rememberMe, setRememberMe, setForm, form} = useLogin();

  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            marginTop: 32,
          }}>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <Text style={styles.TitleStyle}>Selamat Datang Kembali!</Text>
              <Text style={styles.DescStyle}>
                Isikan kolom dibawah dengan data yang sesuai.
              </Text>

              <View style={styles.formGroup}>
                <InputField
                  type={'email-address'}
                  label={form.email.label}
                  focus={true}
                  style={{marginTop: 14}}
                  placeholder="Masukkan email"
                  required={form.email.required}
                  helper={form.email.message}
                  value={form.email.value}
                  onChangeText={text => setForm('email', text)}
                />
                <InputField
                  type={'password'}
                  label={form.password.label}
                  focus={true}
                  style={{marginTop: 14}}
                  placeholder="Masukkan password"
                  required={form.password.required}
                  helper={form.password.message}
                  value={form.password.value}
                  onChangeText={text => setForm('password', text)}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 16,
                }}>
                <CustomCheckbox
                  onPress={() => setRememberMe(!rememberMe)}
                  title={'Remember Me'}
                  isChecked={rememberMe}
                />
                <TouchableOpacity
                  onPress={() => {
                    console.log('kepencet');
                  }}>
                  <Text style={styles.highlightText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <View style={styles.actionSection}>
        <View style={styles.actionButton}>
          <ButtonMain
            onPress={() => {
              // Handle button press event
              console.log('Form Values:', form);
              console.log('Form Values:', form);
            }}
            title="Masuk"
            style={styles.customButton}
            textStyle={styles.customButtonText}
          />
        </View>
        <View style={styles.actionText}>
          <Text style={styles.DescStyle}>Belum punya akun?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.highlightText}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
