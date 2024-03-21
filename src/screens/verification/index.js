import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {InputField, ButtonMain} from '../../components';
import {IcEyeClose, IcEyeOpen, IcPlus} from '../../assets/icons';
import {Color, FontSize, Fonts} from '../../constants';
import {useForm} from '../../utils/form';
import {ENDPOINT} from '../../utils/endpoint';
import {launchCamera} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './styles';

export default function ValidationAccount({navigation}) {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [form, setForm] = useForm({
    nik: {
      label: 'NIK',
      required: true,
      value: '',
      error: false,
      message: '',
      customMessage: '',
    },
  });

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      formData.append('nik', form.nik.value);

      if (selectedImage) {
        const filename = selectedImage.split('/').pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image';
        formData.append('ktp', {
          uri: selectedImage,
          type,
          name: filename,
        });
      }

      // Make the API request
      const response = await axios.put(ENDPOINT.AUTH.VALIDASI, formData, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      const {success, data, message, status} = response.data;
      // Handle the response from the API
      console.log('API Response:', response.data);
      if (success) {
        navigation.replace('Home');
        Alert.alert('Verifikasi Berhasil!', message);
      } else {
        Alert.alert('Verifikasi Gagal!', message);
      }
    } catch (error) {
      console.log('API Error:', error.message);
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
            <View style={styles.sectionStyle}>
              <Text style={styles.TitleStyle}>Validasi Datamu!</Text>
              <Text style={styles.DescStyle}>
                Isikan data NIK untuk validasi data pengguna.
              </Text>

              <View style={styles.formGroup}>
                <InputField
                  type={'nik'}
                  label={form.nik.label}
                  helper={form.nik.message}
                  placeholder="16 digit Nomor Induk Kependudukan (NIK)"
                  required={form.nik.required}
                  value={form.nik.value}
                  onChangeText={text => setForm('nik', text)}
                  maxInputLength={16}
                />

                <View>
                  <View style={styles.labelContainer}>
                    {<Text style={styles.labelStyle}>Foto KTP</Text>}
                    {<Text style={{color: Color.DANGER}}>*</Text>}
                  </View>
                  <TouchableOpacity onPress={handleCameraLaunch}>
                    {/* Display selected image or placeholder */}
                    {selectedImage ? (
                      <Image
                        source={{uri: selectedImage}}
                        style={{width: 361, height: 160, borderRadius: 8}}
                      />
                    ) : (
                      <View
                        style={{
                          width: 'auto',
                          height: 160,
                          backgroundColor: '#E5E5E5',
                          borderColor: '#808080',
                          borderRadius: 8,
                          borderWidth: 1,
                          borderStyle: 'dashed',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IcPlus />
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <View style={styles.actionSection}>
        <View style={styles.actionButton}>
          <ButtonMain
            loading={loading}
            onPress={() => {
              handleSubmit();
              console.log(form);
            }}
            title="Lanjut"
            style={styles.customButton}
            textStyle={styles.customButtonText}
          />
        </View>
      </View>
    </View>
  );
}
