import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';
import {LabelCategory, LabelStatus} from '../..';

const DetailReportCategory = ({category, status, date, time}) => {
  return (
    <View>
      <Text style={styles.title}>Kategori dan Status Laporan</Text>
      <View style={styles.separator} />
      <View style={styles.descBox}>
        <View style={styles.categoryBox}>
          {category}
          {status}
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailReportCategory;

const styles = StyleSheet.create({
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
  descBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
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
