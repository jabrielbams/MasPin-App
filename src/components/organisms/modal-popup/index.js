import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Color, FontSize, Fonts} from '../../../constants';
import {ButtonHorizontalMain, ButtonMain} from '../..';
import {
  ImgModalDanger,
  ImgModalSuccess,
  ImgModalWarning,
} from '../../../assets/images';

const ModalPopup = ({
  isVisible,
  type,
  titleModal,
  descModal,
  rightButtonTitle,
  leftButtonTitle,
  onPressLeft,
  onPressRight,
  disableButton,
  oneButtonModal,
  oneButtonTitle,
  oneButtonPress,
  oneButtonLoading,
  oneButtonDisable,
}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {renderIcon(type)}
            <View style={styles.textBox}>
              <Text style={styles.titleModal}>{titleModal}</Text>
              <Text style={styles.descModal}>{descModal}</Text>
            </View>
            {oneButtonModal ? (
              <ButtonMain
                title={oneButtonTitle}
                onPress={oneButtonPress}
                disabled={oneButtonDisable}
                loading={oneButtonLoading}
              />
            ) : (
              <ButtonHorizontalMain
                titlePrimary={rightButtonTitle}
                titleSecondary={leftButtonTitle}
                onPressLeft={onPressLeft}
                onPressRight={onPressRight}
                leftDisable={disableButton}
                rightDisable={disableButton}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const renderIcon = type => {
  let iconSource;
  switch (type) {
    case 'alert':
      iconSource = <ImgModalWarning />;
      break;
    case 'failed':
      iconSource = <ImgModalDanger />;
      break;
    case 'success':
      iconSource = <ImgModalSuccess />;
      break;
    default:
      // Default to a generic icon or no icon
      iconSource = null;
      break;
  }

  if (iconSource) {
    return <>{iconSource}</>;
  } else {
    return null;
  }
};

export default ModalPopup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 16,
  },
  textBox: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 8,
    marginBottom: 40,
  },
  titleModal: {
    textAlign: 'center',
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.SEMIBOLD,
    color: Color.BLACK,
  },
  descModal: {
    textAlign: 'center',
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.TEXTPRIMARY,
  },
});
