import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';

const ReportInfoCard = ({receiver, date, time}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'column', gap: 10}}>
        <View style={styles.receiverBox}>
          <Text style={styles.descText}>Laporan ini telah diterima oleh</Text>
          <Text style={styles.receiver}>{receiver}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
          <Text style={styles.date}>{date},</Text>
          <Text style={styles.time}> {time} WIB</Text>
        </View>
      </View>
    </View>
  );
};

export default ReportInfoCard;

const styles = StyleSheet.create({
  receiverBox: {flexDirection: 'row', alignItems: 'center', gap: 2},
  cardContainer: {
    borderRadius: 8,
    backgroundColor: Color.WHITE,
    padding: 10,
    elevation: 1,
  },
  descText: {
    color: Color.BLACK,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
  },
  receiver: {
    color: Color.BLACK,
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.dp_12,
  },
  date: {
    color: Color.TEXTBOX,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
  },
  time: {
    color: Color.TEXTBOX,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
  },
});
