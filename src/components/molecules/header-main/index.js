import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcChevronLeft} from '../../../assets/icons';
import {Color, FontSize, Fonts} from '../../../constants';

const HeaderMain = ({sectionTitle, onPressBack, showLeftButton}) => {
  return (
    <View>
      <View style={styles.headerMain}>
        <View style={styles.title}>
          {showLeftButton ? (
            <TouchableOpacity onPress={onPressBack}>
              <IcChevronLeft />
            </TouchableOpacity>
          ) : null}

          <Text style={styles.headerText}>{sectionTitle}</Text>
        </View>
      </View>
      <View style={styles.dividerStyle} />
    </View>
  );
};

export default HeaderMain;

const styles = StyleSheet.create({
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerText: {
    fontFamily: Fonts.BOLD,
    fontSize: 24,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
});
