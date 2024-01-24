import {StyleSheet} from 'react-native';
import {Color, FontSize, Fonts} from '../../constants';

export default StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    paddingTop: 52,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: Color.WHITE,
    paddingHorizontal: 16,
  },
  sectionStyle: {
    // marginHorizontal: 16,
    justifyContent: 'flex-start',
    gap: 4,
  },
  titleStyle: {
    color: Color.BLACK,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  descStyle: {
    color: Color.TEXTSECONDARY,
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '400',
  },
  highlightText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    color: Color.PRIMARY,
  },
  formGroup: {
    marginTop: 32,
    marginBottom: 32,
    gap: 24,
    flexDirection: 'column',
  },
  actionButton: {
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  actionText: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  actionSection: {
    marginTop: 15,
    marginBottom: 35,
    gap: 4,
    // marginHorizontal: 16,
  },
  gap: {
    height: 32,
  },
  customButton: {
    backgroundColor: Color.PRIMARY,
  },
  customButtonText: {
    fontFamily: Fonts.MEDIUM,
    color: Color.WHITE,
    fontSize: FontSize.dp_16,
  },
});
