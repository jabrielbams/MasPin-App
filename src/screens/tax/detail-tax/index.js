/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {IcChevronLeft} from '../../../assets/icons';
import {ButtonMain, NotificationIcon} from '../../../components';
import styles from './styles';
import {Color, FontSize, Fonts} from '../../../constants';
import {useTax} from '../useTax';
import {ImgStrokeDivider} from '../../../assets/images';

const DetailTax = props => {
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

  const PlatNomor = () => (
    <View style={styles.containerMain}>
      <View style={styles.containerInner}>
        <View style={styles.innerBox}>
          <View style={styles.statisBox}>
            <Text style={styles.statisText}>R</Text>
          </View>
          <TextInput
            style={styles.centerInput}
            maxLength={4}
            keyboardType="number-pad"
            placeholder="0000"
            placeholderTextColor={'#3F3F3F'}
          />
          <TextInput
            style={styles.rightInput}
            maxLength={2}
            keyboardType="number-pad"
            placeholder="XX"
            placeholderTextColor={'#3F3F3F'}
          />
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
            onPress={() => {
              navigation.navigate('DetailInfoTax', {
                section: 'Detail Pajak',
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailTax;
