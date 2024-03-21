/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  ButtonMain,
  HeaderMain,
  ModalPopup,
  NotificationIcon,
  TaxCardMain,
} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IcChevronLeft,
  IcChevronRightActive,
  IconCar,
  IconHouse,
  IconMotorcycle,
} from '../../assets/icons';
import {Color, FontSize, Fonts} from '../../constants';
import {ImgBannerPajak} from '../../assets/images';
import {ENDPOINT} from '../../utils/endpoint';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaxScreen = props => {
  const {route, navigation} = props;
  const {section, type} = route.params;

  const [loading, setLoading] = useState(false);
  const [platNomor, setPlatNomor] = useState(['', '', '', '', '']);
  const [taxData, setTaxData] = useState([]);
  const [showModalFailure, setShowModalFailure] = useState(false);

  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [sectionPajak, setSectionPajak] = useState('Pajak Kendaraan Roda 2');

  const navigateRodaDua = () => {
    setIsPhaseTwo(true);
  };

  const navigateRodaEmpat = () => {
    setIsPhaseTwo(true);
    setSectionPajak('Pajak Kendaraan Roda 4');
  };

  const onPhaseTwo = () => {
    if (type === 1) {
      return <ListPajak />;
    } else {
      return <PlatNomor />;
    }
  };

  const handleChangeLetter = (text, index) => {
    if (/^[A-Z]{0,1}$/.test(text)) {
      const newPlatNomor = [...platNomor];
      newPlatNomor[index] = text.toUpperCase();
      setPlatNomor(newPlatNomor);
    }
  };

  const handleChangeNumber = (text, index) => {
    if (/^\d{0,1}$/.test(text)) {
      const newPlatNomor = [...platNomor];
      newPlatNomor[index] = text;
      setPlatNomor(newPlatNomor);
    }
  };

  const handleApiRequest = async () => {
    setLoading(true);
    try {
      // Dapatkan refreshToken dari AsyncStorage
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      // Set up header dengan token
      const headers = {
        Authorization: `Bearer ${refreshToken}`,
      };

      const fullPlatNomor = `R ${platNomor.slice(0, 4).join('')} ${platNomor
        .slice(4, 6)
        .join('')}`;

      const response = await axios.get(
        `${ENDPOINT.TAX.CEK_PAJAK}/${fullPlatNomor}`,
        {headers},
      );

      setTaxData(response.data);
      navigation.navigate('DetailInfoTax', {
        taxData: response.data,
        section: 'Detail Pajak',
      });
      console.log('API Response:', response.data);
    } catch (error) {
      setShowModalFailure(true);
      console.error('API Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const PlatNomor = () => (
    <View>
      {/* HeaderTitle */}
      <View style={styles.headerBox}>
        <Text style={styles.titleSection}>{sectionPajak}</Text>
        <Text style={styles.desc}>Masukan plat kendaraanmu untuk melihat</Text>
      </View>

      {/* InputField */}
      <View style={styles.containerMain}>
        <View style={styles.containerInner}>
          <View style={styles.innerBox}>
            <View style={styles.container}>
              <TextInput style={styles.codeArea} value="R" editable={false} />
              {platNomor.slice(0, 4).map((digit, index) => (
                <TextInput
                  key={index}
                  placeholder="0"
                  placeholderTextColor={'#ffffff50'}
                  style={styles.input}
                  value={digit}
                  onChangeText={text => handleChangeNumber(text, index)}
                  keyboardType="numeric"
                  maxLength={1}
                />
              ))}
              <TextInput
                style={styles.inputLetter}
                placeholder="X"
                placeholderTextColor={'#ffffff50'}
                value={platNomor[4]}
                onChangeText={text => handleChangeLetter(text, 4)}
                maxLength={1}
              />
              <TextInput
                style={styles.inputLetter}
                placeholder="X"
                placeholderTextColor={'#ffffff50'}
                value={platNomor[5]}
                onChangeText={text => handleChangeLetter(text, 5)}
                maxLength={1}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const ListPajak = () => (
    <View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          source={ImgBannerPajak}
          style={{width: '100%', borderRadius: 8}}
        />
      </View>
      <View>
        <View style={{marginVertical: 24}}>
          <Text style={styles.sectionTitle}>Pilih Layanan</Text>
          <View style={styles.sectionList}>
            <TaxCardMain
              iconRight={<IconMotorcycle />}
              title="Pajak Kendaraan Roda 2"
              descDetail="Detail & Bayar"
              iconDetail={<IcChevronRightActive />}
              onPress={navigateRodaDua}
            />
            <TaxCardMain
              iconRight={<IconCar />}
              title="Pajak Kendaraan Roda 4"
              descDetail="Detail & Bayar"
              iconDetail={<IcChevronRightActive />}
              onPress={navigateRodaEmpat}
            />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderMain
        showLeftButton={true}
        sectionTitle={section}
        onPressBack={() => {
          if (isPhaseTwo === true) {
            setIsPhaseTwo(false);
          } else {
            navigation.goBack();
          }
        }}
      />

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {isPhaseTwo ? <PlatNomor /> : <ListPajak />}
        </View>
      </ScrollView>

      {/* FOOTER */}
      {isPhaseTwo ? (
        <View style={{paddingHorizontal: 16, marginBottom: 20}}>
          <ButtonMain
            title="Lihat"
            disabled={false}
            onPress={handleApiRequest}
            loading={loading}
          />
        </View>
      ) : null}

      {/* Modal Popup */}
      <ModalPopup
        isVisible={showModalFailure}
        oneButtonModal={true}
        type={'failed'}
        titleModal={'Data Pajak Tidak Ditemukan!'}
        descModal={
          'Periksa kembali nomor kendaraan, dan pastikan nomor yang diinputkan sudah benar'
        }
        oneButtonTitle={'Kembali'}
        oneButtonPress={() => {
          setShowModalFailure(false);
        }}
      />
    </View>
  );
};

export default TaxScreen;
