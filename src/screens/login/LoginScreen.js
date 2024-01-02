import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ButtonMain, CustomCheckbox, InputField} from './src/components';
import {Color, Fonts} from './src/constants';

const LoginScreen = ({}) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          marginTop: 52,
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
                  title={'Email'}
                  focus={true} //initial focus on this TextInput
                  style={{marginTop: 14}}
                  placeholder="Masukkan alamat email"
                />
                <InputField
                  title={'Password'}
                  focus={true} //initial focus on this TextInput
                  style={{marginTop: 14}}
                  placeholder="Masukkan password"
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
            nPress={() => {
              // Handle button press event
            }}
            title="Button"
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
