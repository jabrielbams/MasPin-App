/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {IcChevronLeft} from '../../../assets/icons';
import {
  ButtonMain,
  LoadingIndicator,
  ModalPopup,
  NotificationIcon,
} from '../../../components';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import styles from './styles';
import {Color, FontSize, Fonts} from '../../../constants';
import {useTax} from '../useTax';
import {ImgStrokeDivider} from '../../../assets/images';
import {ENDPOINT} from '../../../utils/endpoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DetailTax = props => {
  const [loading, setLoading] = useState(false);
  const [platNomor, setPlatNomor] = useState(['', '', '', '', '']);
  const [taxData, setTaxData] = useState([]);

  const [showModalFailure, setShowModalFailure] = useState(false);

  const handleChangeNumber = (text, index) => {
    if (/^\d{0,1}$/.test(text)) {
      const newPlatNomor = [...platNomor];
      newPlatNomor[index] = text;
      setPlatNomor(newPlatNomor);
    }
  };

  const handleChangeLetter = (text, index) => {
    if (/^[A-Z]{0,1}$/.test(text)) {
      const newPlatNomor = [...platNomor];
      newPlatNomor[index] = text.toUpperCase();
      setPlatNomor(newPlatNomor);
    }
  };

  const {
    uiWording,
    type1,
    isPhaseTwo,
    setUiWording,
    onChangeType,
    onChangeTitle,
    onChangePhase,
  } = useTax();

  const {route, navigation} = props;
  const {title, desc, section, type} = route.params;

  const onPhaseTwo = () => {
    if (type === 1) {
      return <PlatNomor />;
    } else {
      return <CodeBayar />;
    }
  };

  // const onCodeChange = value => {
  //   setPlatNomor(value);
  // };

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
      navigation.navigate('DetailInfoTax', {taxData: response.data});
      console.log('API Response:', response.data);
    } catch (error) {
      setShowModalFailure(true);
      console.error('API Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const PlatNomor = () => (
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
  );

  const CodeBayar = () => (
    <View style={styles.codeContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.innerBoxCode}>
          <Text style={styles.staticCode}>1234</Text>
          <View style={styles.separator} />
          <TextInput
            style={styles.inputCode}
            maxLength={14}
            keyboardType="number-pad"
            placeholder="xxxxxxxxxxxxxx"
            placeholderTextColor={Color.TEXTPRIMARY}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.mainBody}>
      <View style={styles.headerMain}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <IcChevronLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>{section}</Text>
        </View>
        <NotificationIcon style={{marginLeft: 'auto'}} />
      </View>
      <View style={styles.dividerStyle} />
      <View style={{flexDirection: 'column'}}>
        <View style={styles.content}>
          {/* header */}
          <View style={styles.headerBox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>

          {/* content */}
          <View>{onPhaseTwo()}</View>
        </View>
        <View style={styles.btnContainer}>
          <ButtonMain
            title="Lihat"
            disabled={false}
            onPress={handleApiRequest}
            loading={loading}
          />
        </View>
      </View>

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

export default DetailTax;
