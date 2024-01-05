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

const RegisterScreen = ({navigation}) => {
  const {form, setForm} = useRegister();
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
                // type={'name'}
                label={form.name.label}
                helper={form.name.message}
                placeholder="Masukkan nama lengkap"
                required={form.name.required}
                value={form.name.value}
                onChangeText={text => setForm('name', text)}
              />
              <InputField
                type={'phone-number'}
                label={form.phone.label}
                helper={form.phone.message}
                placeholder="Masukkan nomor"
                required={form.phone.required}
                value={form.phone.value}
                onChangeText={text => setForm('phone', text)}
              />
              <InputField
                type={'email-address'}
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
            onPress={() => {
              // Handle button press event
              console.log('Form Values:', form);
            }}
            title="Daftar"
            style={styles.customButton}
            textStyle={styles.customButtonText}
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
