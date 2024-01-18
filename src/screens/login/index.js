import {
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
import {Color, Fonts} from './src/constants';
import {useLogin} from './useLogin';
import styles from './styles';
import {useForm} from '../../utils/form';
import axios from 'axios';
import {ENDPOINT} from '../../utils/endpoint';

const LoginScreen = ({navigation}) => {
  const [rememberMe, setRememberMe] = useState(false);

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
      console.log(refreshToken);
    } catch (error) {
      console.error('Error saving token to AsyncStorage:', refreshToken);
    }
  };

  const handleLogin = async () => {
    console.log(ENDPOINT.AUTH.LOGIN);
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
        }
        console.log('login berhasil');
      }
      console.log(data);
    } catch (error) {
      console.error('Login error:', error.message);
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
              handleLogin();
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
