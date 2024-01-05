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
import {Color, Fonts} from '../../constants';
import {useForm} from '../../utils/form';

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

  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          marginTop: 32,
        }}>
        <View>
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
            }}
            title="Masuk"
            style={styles.customButton}
            textStyle={styles.customButtonText}
          />
        </View>
        <View style={styles.actionText}>
          <Text style={styles.DescStyle}>Belum punya akun?</Text>
          <TouchableOpacity>
            <Text style={styles.highlightText}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    alignContent: 'flex-start',
  },
  SectionStyle: {
    marginHorizontal: 16,
    justifyContent: 'flex-start',
  },
  TitleStyle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  DescStyle: {
    color: '#999EA1',
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '400',
  },
  highlightText: {
    fontFamily: Fonts.LIGHT,
    fontSize: 14,
    color: Color.PRIMARY,
  },
  formGroup: {
    marginTop: 32,
    gap: 24,
    flexDirection: 'column',
  },
  actionButton: {
    justifyContent: 'flex-end',
  },
  actionText: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  actionSection: {
    marginBottom: 40,
    gap: 4,
    marginHorizontal: 16,
  },
  gap: {
    height: 32,
  },
});
