import React, {useEffect, useState} from 'react';
import {
  FlatList,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ButtonMain,
  CustomCheckbox,
  HeaderNavigation,
  InputDropdownField,
  InputField,
  LabelCategory,
  LabelStatus,
  ReportCardMain,
  SwitchInputField,
} from '../../components';
import {
  IcChevronDown,
  IcChevronRightActive,
  IcChevronUp,
  IcPlus,
} from '../../assets/icons';
import {ImgCar, ImgNewsCovid} from '../../assets/images';
import {Color, FontSize, Fonts} from '../../constants';
import {useForm} from '../../utils/form';

import {MAP_API_KEY} from '@env';
import {launchCamera} from 'react-native-image-picker';
import Geolocation from 'react-native-geolocation-service';
import Geocoding from 'react-native-geocoding';
import getAddress from '../../services/location';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReportForm = ({navigation}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');

  const [form, setForm] = useForm({
    label: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'label',
    },
    desc: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Deskripsi Laporan',
    },
    address: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'address',
    },
  });

  const dummyDropdownData = [
    {id: 1, label_type: 'Lalu Lintas'},
    {id: 2, label_type: 'Jalan Raya'},
    {id: 3, label_type: 'Ketertiban'},
    {id: 4, label_type: 'kebersihan'},
    {id: 5, label_type: 'Fasilitas Umum'},
  ];

  const handlePressDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectDropdownItem = item => {
    setForm('label', item.label_type);
    setShowDropdown(false);
  };

  const getPhotoLocation = () => {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setLocation({latitude, longitude});
      getAddress(latitude, longitude, setAddress);
    });
  };

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
        getPhotoLocation();
      }
    });
  };

  const formValidation = () => {
    const error = form.label.error && form.desc.error && form.desc.error;
    if (error === false && isAgree) {
      setSubmit(true);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    if (refreshToken) {
      formData.append('authorization', refreshToken);
    }

    formData.append('kategori_masalah', form.label.value);
    formData.append('detail_masalah', form.desc.value);
    formData.append('lokasi', form.address.value);

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
    // Log isi formulir sebelum mengirim ke API
    console.log('Form Data:', {
      authorization: refreshToken,
      image_laporan: selectedImage,
      kategori_masalah: form.label.value,
      detail_masalah: form.desc.value,
      lokasi: form.address.value,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      handleCameraLaunch();
    }, []),
  );

  // const handleSubmit = () => {
  //   console.log('Hasil Formulir:', form);
  //   Object.keys(form).forEach(key => {
  //     console.log(`${key}: ${form[key].value}`);
  //   });
  //   // Di sini Anda dapat mengirimkan data formulir ke backend atau melakukan aksi lainnya
  // };

  // useEffect(() => {
  //   if (route.params && route.params.launchCameraOnMount) {
  //     handleCameraLaunch();
  //   }
  //   console.log('alamat', address);
  //   console.log('image', selectedImage);

  //   // Geocoding.init(MAP_KEY);
  // }, [address, selectedImage, route.params]);

  return (
    <View style={styles.mainBody}>
      <FlatList
        data={[{key: 'header'}]} // Add any necessary data for your use case
        renderItem={() => (
          <>
            <HeaderNavigation
              onPress={() => {
                console.log('kembali');
              }}
              title={'Buat Laporan'}
            />
            <View style={styles.dividerStyle} />
            <View style={styles.content}>
              <View style={styles.sectionDivider}>
                <Text style={styles.sectionTitle}>Tampilan Laporan</Text>
              </View>
              <View>
                <ReportCardMain
                  imgReport={selectedImage}
                  descReport={
                    form.desc.value ? form.desc.value : form.desc.label
                  }
                  category={
                    <LabelCategory
                      title={form.label.value ? form.label.value : 'Kategori'}
                    />
                  }
                  status={<LabelStatus type={1} />}
                />
              </View>
            </View>
            <View style={styles.contentForm}>
              <InputDropdownField
                label="Label"
                required={true}
                value={form.label.value}
                showDropdown={showDropdown}
                onPress={() => handlePressDropdown()} // Perubahan di sini
                onPressCloseDropdown={() => setShowDropdown(false)} // Perubahan di sini
                onPressSelectItem={item => handleSelectDropdownItem(item)} // Perubahan di sini
                placeholder="Pilih Label"
                dropdownData={dummyDropdownData}
                Icon={showDropdown ? <IcChevronUp /> : <IcChevronDown />}
              />
              <SwitchInputField
                required={true}
                label="Lokasi"
                switchTitle={'Lokasi sama dengan foto'}
                value={address ? address : form.address.value}
                onChangeText={value => setForm('address', value)}
                helper={form.address.message}
                placeholder="Tuliskan lokasi"
              />
              <InputField
                type="text-area"
                formStyle={styles.descForm}
                containerStyle={styles.descContainer}
                label={form.desc.label}
                placeholder="Deskripsikan detail permasalahanmu"
                value={form.desc.value}
                helper={form.desc.message}
                onChangeText={value => setForm('desc', value)}
              />
              <View>
                <Text
                  style={{
                    fontFamily: Fonts.MEDIUM,
                    color: Color.DANGER,
                    fontSize: 16,
                    marginBottom: 12,
                  }}>
                  Pernyataan
                </Text>
                <View
                  style={{
                    gap: 20,
                    flexDirection: 'column',
                    borderWidth: 1,
                    borderColor: Color.OUTLINE_GRAY,
                    borderRadius: 8,
                    paddingVertical: 16,
                    paddingHorizontal: 12,
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.REGULAR,
                      fontSize: 12,
                      color: Color.BLACK,
                    }}>
                    Laporan yang saya buat benar adanya dan dapat
                    dipertanggungjawabkan jika saya bersalah.
                  </Text>
                  <CustomCheckbox
                    onPress={() => {
                      setIsAgree(!isAgree);
                    }}
                    title={'Ya, saya setuju'}
                    isChecked={isAgree}
                  />
                </View>
              </View>
            </View>
          </>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.key}
      />
      <View style={styles.actionSection}>
        <View style={styles.actionButton}>
          <ButtonMain
            onPress={() => {
              // Handle button press event
              handleSubmit();
            }}
            title="Buat laporan"
          />
        </View>
      </View>
    </View>
  );
};
export default ReportForm;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 32,
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerText: {
    fontFamily: Fonts.BOLD,
    fontSize: 24,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  contentForm: {
    paddingHorizontal: 16,
    rowGap: 24,
  },
  content: {
    paddingHorizontal: 16,
  },
  featureList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionDivider: {
    marginTop: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },
  otherStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  otherText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_14,
    color: Color.PRIMARY,
  },

  actionSection: {
    marginVertical: 24,
    gap: 4,
    marginHorizontal: 16,
  },
  actionButton: {
    justifyContent: 'flex-end',
  },
  actionText: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },

  descForm: {
    height: 120,
  },
  descContainer: {
    alignContent: 'flex-start',
  },
});
