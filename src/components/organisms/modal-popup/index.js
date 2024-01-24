import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Color, FontSize, Fonts} from '../../../constants';
import {ButtonHorizontalMain} from '../..';

const ModalPopup = ({
  isVisible,
  iconModal,
  titleModal,
  descModal,
  titlePrimary,
  titleSecondary,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {iconModal}
            <View style={styles.textBox}>
              <Text style={styles.titleModal}>{titleModal}</Text>
              <Text style={styles.descModal}>{descModal}</Text>
            </View>
            <ButtonHorizontalMain
              titlePrimary={titlePrimary}
              titleSecondary={titleSecondary}
              onPressLeft={onPressLeft}
              onPressRight={onPressRight}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
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
