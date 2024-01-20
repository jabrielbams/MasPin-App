import {
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

export default function ValidationAccount() {
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
    try {
      const formData = new FormData();
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      formData.append('nik', form.nik.value);

      if (selectedImage) {
        const filename = selectedImage.split('/').pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image';
        formData.append('image_laporan', {
          uri: selectedImage,
          type,
          name: filename,
        });
      }

      // Make the API request
      const response = await axios.post(ENDPOINT.NGROK.VALIDASI, formData, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle the response from the API
      console.log('API Response:', response.data);
    } catch (error) {
      console.log('API Error:', error.message);
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
            onPress={() => {
              // Handle button press event
              console.log('Form Values:', form);
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

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    alignContent: 'flex-start',
  },
  sectionStyle: {
    marginHorizontal: 16,
    justifyContent: 'flex-start',
    gap: 4,
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

  labelContainer: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 8,
  },
  labelStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },
});
