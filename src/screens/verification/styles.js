import {StyleSheet} from 'react-native';
import {Color, FontSize, Fonts} from '../../constants';

export default StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    alignContent: 'flex-start',
  },
  sectionStyle: {
    marginHorizontal: 16,
    justifyContent: 'flex-start',
    gap: 4,
  },
  TitleStyle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  DescStyle: {
    color: '#999EA1',
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '400',
  },
  formGroup: {
    marginTop: 32,
    gap: 24,
    flexDirection: 'column',
  },
  actionButton: {
    justifyContent: 'flex-end',
  },
  actionText: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  actionSection: {
    marginBottom: 40,
    gap: 4,
    marginHorizontal: 16,
  },

  labelContainer: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 8,
  },
  labelStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },
});
