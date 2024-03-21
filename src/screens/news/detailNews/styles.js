import {StyleSheet} from 'react-native';
import {Color, FontSize, Fonts} from '../../../constants';

export default StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 32,
  },
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
  categoryText: status => ({
    color: Color.TEXTSECONDARY,
    fontSize: 12,
    fontFamily: status ? Fonts.MEDIUM : Fonts.REGULAR,
    letterSpacing: 1.5,
  }),
  titleText: {
    marginTop: 8,
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
  content: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  textDesc: {
    textAlign: 'justify',
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  imgContainer: {height: 223, width: '100%', marginTop: 10},
  imgStyle: {
    width: '100%',
    height: '100%',
  },
});
