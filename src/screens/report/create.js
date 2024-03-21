import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  PermissionsAndroid,
  Pressable,
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
  LoadingIndicator,
  ModalPopup,
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
import axios from 'axios';
import {ENDPOINT} from '../../utils/endpoint';
import {launchCameraAndHandleLocation} from './camera';

const ReportForm = props => {
  const {navigation, route} = props;

  const [userData, setUserData] = useState();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [useSavedLocation, setUseSavedLocation] = useState(false);

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(dropdownData);

  const [loading, setLoading] = useState(false);
  const [showModalConfirmation, setShowModalConfirmation] = useState(false);
  const [showModalSuccess, setModalSuccess] = useState(false);
  const [showModalFailure, setModalFailure] = useState(false);

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

  // Function to reset the form state
  const resetFormState = () => {
    setForm('@reset');
    setSubmit(false);
    setIsAgree(false);
    setSelectedImage(null);
    setLocation(null);
    setAddress('');
  };

  const isFormValid = () => {
    return (
      !!selectedImage &&
      !!form.label.value &&
      !!form.desc.value &&
      !form.label.error &&
      !form.desc.error &&
      !form.address.error &&
      isAgree
    );
  };

  const dropdownData = [
    {id: 1, label_type: 'Lalu Lintas'},
    {id: 2, label_type: 'Fasilitas Publik'},
    {id: 3, label_type: 'Kebersihan'},
    {id: 4, label_type: 'Ketertiban'},
  ];

  const handleSearch = text => {
    const filtered = dropdownData.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
    setSearchText(text);
  };

  // const getPhotoLocation = () => {
  //   setAddress('Semarang City, Central Java 50131');
  // };

  const getPhotoLocation = () => {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setLocation({latitude, longitude});
      getAddress(latitude, longitude, setAddress);
    });
  };

  // const handleCameraLaunch = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     includeBase64: false,
  //     maxHeight: 2000,
  //     maxWidth: 2000,
  //   };
  //   launchCamera(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled camera');
  //       navigation.goBack();
  //     } else if (response.error) {
  //       console.log('Camera Error: ', response.error);
  //       navigation.goBack();
  //     } else {
  //       let imageUri = response.uri || response.assets?.[0]?.uri;
  //       setSelectedImage(imageUri);
  //       getPhotoLocation();
  //     }
  //   });
  // };

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
        navigation.goBack();
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
        navigation.goBack();
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        getPhotoLocation();
      }
    });
    setShowModalConfirmation(false);
  };

  const handlePressDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectDropdownItem = item => {
    setForm('label', item.label_type);
    setShowDropdown(false);
  };

  const handleOpenModalConfirmation = () => {
    setShowModalConfirmation(true);
  };

  const handleCloseModal = () => {
    setShowModalConfirmation(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      formData.append('kategori_masalah', form.label.value);
      formData.append('detail_masalah', form.desc.value);
      formData.append(
        'lokasi',
        useSavedLocation ? address : form.address.value,
      );

      if (selectedImage) {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
        const filename = `report_${formattedDate}.jpg`;
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image';
        formData.append('image_laporan', {
          uri: selectedImage,
          type,
          name: filename,
        });
        console.log('uri:', selectedImage);
        console.log('type:', type);
        console.log('name:', filename);
      }

      // Make the API request
      const response = await axios.post(ENDPOINT.REPORT.CREATE, formData, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle the response from the API

      setShowModalConfirmation(false);
      setModalSuccess(true);
      console.log('API Response:', response.data);
    } catch (error) {
      console.log('API Error:', error.message);
      setShowModalConfirmation(false);
      setModalFailure(true);
    } finally {
      setLoading(false);
      resetFormState();
    }
  };

  const navigateToTab = tabKey => {
    navigation.navigate('Home', {
      screen: tabKey,
    });
  };

  useFocusEffect(
    useCallback(() => {
      handleCameraLaunch();

      return () => {
        resetFormState();
      };
    }, []),
  );

  return (
    <View style={styles.mainBody}>
      <FlatList
        data={[{key: 'header'}]}
        renderItem={() => (
          <>
            <View style={styles.headerMain}>
              <HeaderNavigation
                title={'Lainnya'}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
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
                dropdownData={dropdownData}
                Icon={showDropdown ? <IcChevronUp /> : <IcChevronDown />}
              />
              <SwitchInputField
                required={true}
                label="Lokasi"
                switchTitle={'Sama dengan foto'}
                onValueChange={setUseSavedLocation}
                valueSwitch={useSavedLocation}
                value={useSavedLocation ? address : form.address.value}
                onChangeText={value => setForm('address', value)}
                helper={form.address.message}
                placeholder="Tuliskan lokasi"
                editable={!useSavedLocation}
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
                <Text style={styles.statement}>Pernyataan</Text>
                <View style={styles.agreeContainer}>
                  <Text style={styles.descAgree}>
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
            disabled={!isFormValid()}
            onPress={() => {
              // Handle button press event
              handleOpenModalConfirmation();
            }}
            title="Buat laporan"
          />

          {/* Confirmation Modal */}
          <ModalPopup
            isVisible={showModalConfirmation}
            type={'alert'}
            titleModal={'Kirim Laporan Sekarang?'}
            descModal={'Pastikan semua data yang kamu inputkan sudah benar'}
            leftButtonTitle={'Kembali'}
            rightButtonTitle={'Kirim'}
            onPressLeft={handleCloseModal}
            onPressRight={() => {
              handleSubmit();
            }}
            disableButton={loading}
          />

          <ModalPopup
            isVisible={showModalFailure}
            type={'failed'}
            titleModal={'Laporan Gagal Dibuat!'}
            descModal={'Terdapat masalah pada sistem kami, coba lagi'}
            leftButtonTitle={'Batal'}
            rightButtonTitle={'Ulangi'}
            onPressLeft={() => {
              navigation.replace('Home');
            }}
            onPressRight={() => {
              setModalFailure(false);
            }}
          />

          <ModalPopup
            isVisible={showModalSuccess}
            type={'success'}
            titleModal={'Laporan Berhasil Dibuat!'}
            descModal={
              'Laporan kamu berhasil dibuat dan akan segera ditindak lanjuti'
            }
            leftButtonTitle={'Tutup'}
            rightButtonTitle={'Lihat'}
            onPressLeft={() => {
              navigation.replace('Home');
            }}
            onPressRight={() => {
              navigation.navigate('Home', {screen: 'activityName'});
            }}
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

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%', // Adjust the width as needed
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16, // Adjust the margin as needed
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flex: 1, // Equal spacing for both buttons
  },
  cancelButton: {
    backgroundColor: 'red',
    marginRight: 8, // Adjust the margin as needed
  },
  submitButton: {
    backgroundColor: 'green',
    marginLeft: 8, // Adjust the margin as needed
  },
  agreeContainer: {
    gap: 20,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: Color.OUTLINE_GRAY,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  descAgree: {
    fontFamily: Fonts.REGULAR,
    fontSize: 12,
    color: Color.BLACK,
  },
  statement: {
    fontFamily: Fonts.MEDIUM,
    color: Color.DANGER,
    fontSize: 16,
    marginBottom: 12,
  },
});
