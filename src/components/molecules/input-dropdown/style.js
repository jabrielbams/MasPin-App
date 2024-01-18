import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {Color, FontSize, Fonts} from '../../../constants';

export default StyleSheet.create({
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Color.LIGHT_GRAY,
    borderWidth: 1,
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
  },
  valuePlaceholder: {
    color: Color.BLACK,
  },
  valueInputContainer: {
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: Color.BLACK,
  },
  divider: {
    height: 1,
    color: Color.LIGHT_GRAY,
  },

  titleSection: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 14,
  },
  labelStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },

  item: {
    fontSize: 14,
    color: Color.BLACK,
    lineHeight: 21,
    paddingVertical: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    maxHeight: 150,
  },

  inputValue: {
    fontSize: 14,
    color: Color.LIGHT_GRAY,
    flex: 1,
  },
});
