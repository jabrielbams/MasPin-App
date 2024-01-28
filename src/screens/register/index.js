import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {InputField, ButtonMain} from '../../components';
import {IcEyeClose, IcEyeOpen} from '../../assets/icons';
import styles from './styles';
import {Color} from '../../constants';
import {useForm} from '../../utils/form';
import axios from 'axios';
import {ENDPOINT} from '../../utils/endpoint';

const RegisterScreen = ({navigation}) => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    name: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Nama',
    },
    phone_number: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Nomor Telepon',
    },
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
    confirm_password: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Konfirmasi Password',
    },
  });

  const handleDisabledSubmit = () => {
    const isFormValid = Object.values(form).every(
      field => !field.error && field.value.trim() !== '',
    );

    setDisableSubmit(!isFormValid);
  };

  useEffect(() => {
    handleDisabledSubmit();
  }, [form]);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axios.post(ENDPOINT.AUTH.REGISTER, {
        nama: form.name.value,
        noHP: form.phone_number.value,
        email: form.email.value,
        password: form.password.value,
        confirmPassword: form.confirm_password.value,
      });

      const {data, success, message, status} = response.data;

      if (success) {
        Alert.alert('Register Berhasil', message);
        navigation.replace('Login');
      } else {
        Alert.alert('Register Gagal!', message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessageFromAPI = error.response.data.message;

        Alert.alert('Register Gagal', errorMessageFromAPI);
      } else {
        Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.mainBody}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewStyle}>
          <View style={styles.sectionStyle}>
            <Text style={styles.titleStyle}>Buat Akun Maspinmu!</Text>
            <Text style={styles.descStyle}>
              Lengkapi data dibawah untuk bisa melanjutkan.
            </Text>
            <View style={styles.formGroup}>
              <InputField
                type={'name'}
                label={form.name.label}
                helper={form.name.message}
                placeholder="Masukkan nama lengkap"
                required={form.name.required}
                value={form.name.value}
                onChangeText={text => setForm('name', text)}
              />
              <InputField
                type={'phone-number'}
                keyboardType={'number-pad'}
                label={form.phone_number.label}
                helper={form.phone_number.message}
                placeholder="Masukkan nomor"
                required={form.phone_number.required}
                value={form.phone_number.value}
                onChangeText={text => setForm('phone_number', text)}
                maxInputLength={13}
              />
              <InputField
                type={'email'}
                label={form.email.label}
                placeholder="Masukkan email"
                required={form.email.required}
                helper={form.email.message}
                value={form.email.value}
                onChangeText={text => setForm('email', text)}
              />
              <InputField
                type={'password'}
                label={form.password.label}
                placeholder="Masukkan password"
                required={form.password.required}
                secureTextEntry={true}
                helper={form.password.message}
                value={form.password.value}
                onChangeText={text => setForm('password', text)}
              />
              <InputField
                type={'confirm_password'}
                label={form.confirm_password.label}
                placeholder="Ulangi password"
                required={form.confirm_password.required}
                secureTextEntry={true}
                helper={form.confirm_password.message}
                value={form.confirm_password.value}
                onChangeText={text => setForm('confirm_password', text)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.actionSection}>
        <View style={styles.actionButton}>
          <ButtonMain
            disabled={loading || disableSubmit}
            onPress={() => {
              handleRegister();
            }}
            title="Daftar"
            loading={loading}
          />
        </View>
        <View style={styles.actionText}>
          <Text style={styles.descStyle}>Sudah punya akun?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.highlightText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
