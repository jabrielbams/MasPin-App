/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonMain, CustomCheckbox, InputField} from '../../components';
import {ENDPOINT} from '../../utils/endpoint';
import {useForm} from '../../utils/form';
import axios from 'axios';

import styles from './styles';

const LoginScreen = ({navigation}) => {
  const [loginError, setLoginError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    email: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Email',
    },
    password: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Password',
    },
  });

  const saveTokenToStorage = async refreshToken => {
    try {
      await AsyncStorage.setItem('refreshToken', refreshToken);
      console.log(refreshToken, 'saved');
    } catch (error) {
      console.error('Error saving token to AsyncStorage:', refreshToken);
    }
  };

  const handleDisabledSubmit = () => {
    const isEmailValid = !form.email.error && form.email.value.trim() !== '';
    const isPasswordValid =
      !form.password.error && form.password.value.trim() !== '';

    setDisableSubmit(!(isEmailValid && isPasswordValid));
  };

  useEffect(() => {
    handleDisabledSubmit();
  }, [
    form.email.value,
    form.email.error,
    form.password.value,
    form.password.error,
  ]);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(ENDPOINT.AUTH.LOGIN, {
        email: form.email.value,
        password: form.password.value,
      });

      const {data, success, message, status} = response.data;

      if (success) {
        if (data.accessToken) {
          saveTokenToStorage(data.refreshToken);
          navigation.replace('Home');
        } else {
          console.log('Login failed:', message);
          Alert.alert('Login Failed', message);
        }
      }
      console.log(data);
    } catch (error) {
      console.error('Login error:', error.message);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessageFromAPI = error.response.data.message;
        console.log('Error message from API:', errorMessageFromAPI);

        Alert.alert('Login Gagal', errorMessageFromAPI);
      } else {
        Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

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
                  onChangeText={text => {
                    setForm('email', text);
                    handleDisabledSubmit();
                  }}
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
                  onChangeText={text => {
                    setForm('password', text);
                    handleDisabledSubmit();
                  }}
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
                    navigation.navigate('ForgotPassword'); // Navigasi ke halaman "ForgotPassword"
                  }}>
                  <Text style={styles.highlightText}>Lupa Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <View style={styles.actionSection}>
        <View style={styles.actionButton}>
          <ButtonMain
            disabled={loading || disableSubmit}
            onPress={() => {
              // Handle button press event
              handleLogin();
              console.log('Form Values:', form);
            }}
            title="Masuk"
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
