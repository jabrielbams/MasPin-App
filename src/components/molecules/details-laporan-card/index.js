import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Color, FontSize, Fonts} from '../../../constants';
import {IcCopy, IcLikes} from '../../../assets/icons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DetailLaporanCard = ({
  isPhaseTwo,
  title,
  desc,
  reportID,
  onPressCopy,
  onPressLike,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
      {isPhaseTwo ? (
        <Text style={styles.desc}>{desc}</Text>
      ) : (
        <View style={styles.boxId}>
          <Text style={styles.textId}>{reportID}</Text>
          <View style={styles.iconBox}>
            <TouchableOpacity onPress={onPressCopy}>
              <IcCopy />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLike}>
              <IcLikes />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailLaporanCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    backgroundColor: Color.WHITE,
    padding: 10,
    elevation: 1,
  },
  title: {
    color: Color.TEXTBOX,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
  },
  separator: {
    width: '100%',
    backgroundColor: Color.OUTLINE_GRAY,
    height: 1.5,
    marginVertical: 10,
  },
  desc: {
    color: Color.BLACK,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
    lineHeight: 18,
  },
  boxId: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textId: {
    color: Color.BLACK,
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.dp_16,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
