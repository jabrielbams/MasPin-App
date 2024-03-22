import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';

const ButtonHorizontalMain = ({
  onPressLeft,
  onPressRight,
  titlePrimary,
  titleSecondary,
  leftDisabled,
  rightDisabled,
  leftLoading,
  rightLoading,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // style={styles.btnSecondary}
        style={[leftDisabled ? styles.btnDisabled : styles.btnSecondary]}
        onPress={onPressLeft}
        disabled={leftDisabled}>
        {leftLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.textSecondary}>{titleSecondary}</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        // style={styles.btnPrimary}
        style={[rightDisabled ? styles.btnDisabled : styles.btnPrimary]}
        onPress={onPressRight}
        disabled={rightDisabled}>
        {rightLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.textPrimary}>{titlePrimary}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonHorizontalMain;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 8,
  },
  btnSecondary: {
    borderColor: Color.PRIMARY,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '50%',
  },
  btnPrimary: {
    backgroundColor: Color.PRIMARY,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '50%',
  },
  btnDisabled: {
    backgroundColor: Color.DISABLE,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  textSecondary: {
    textAlign: 'center',
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.MEDIUM,
    color: Color.PRIMARY,
  },
  textPrimary: {
    textAlign: 'center',
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.MEDIUM,
    color: Color.WHITE,
  },
});
