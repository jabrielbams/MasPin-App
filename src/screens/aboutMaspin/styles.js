import {StyleSheet} from 'react-native';
import {Color, FontSize, Fonts} from '../../constants';

export default StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: Color.WHITE,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 32,
  },
  content: status => ({
    paddingHorizontal: 16,
    marginTop: 16,
    gap: status ? 10 : null,
  }),
  title: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  desc: status => ({
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: status ? Color.BLACK : Color.TEXTPRIMARY,
    textAlign: 'justify',
  }),
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  maspin: {marginTop: 24, gap: 10, marginBottom: 20},
});
