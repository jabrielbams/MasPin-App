import {StyleSheet} from 'react-native';
import {Color, FontSize, Fonts} from '../../../constants';

export default StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 32,
    flexDirection: 'column',
    height: '100%',
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerText: {
    fontFamily: Fonts.BOLD,
    fontSize: 24,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  content: {
    paddingHorizontal: 16,
  },
  headerBox: {marginTop: 20, marginBottom: 24},
  title: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  desc: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.TEXTSECONDARY,
  },
  containerMain: {
    backgroundColor: '#000000',
    width: '100%',
    height: 110,
    borderRadius: 8,
    padding: 5,
  },
  containerInner: {
    backgroundColor: '#353535',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    padding: 4,
    justifyContent: 'center',
  },
  innerBox: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 18,
  },
  statisBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Color.WHITE,
    width: '22%',
  },
  statisText: {
    color: Color.WHITE,
    fontFamily: Fonts.BOLD,
    fontSize: 32,
  },
  centerInput: {
    lineHeight: 120,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    fontSize: 34,
    fontFamily: Fonts.BOLD,
    width: '45%',
    letterSpacing: 10,
    textAlign: 'center',
  },
  rightInput: {
    lineHeight: 120,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    fontSize: 32,
    fontFamily: Fonts.BOLD,
    alignItems: 'center',
    justifyContent: 'center',
    width: '22%',
    letterSpacing: 10,
    textAlign: 'center',
  },
  codeContainer: {
    backgroundColor: Color.WHITE,
    borderWidth: 1,
    borderColor: Color.OUTLINE_GRAY,
    borderRadius: 8,
    height: 85,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: Color.INNERBOX,
    borderRadius: 8,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  innerBoxCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderBottomWidth: 1.5,
    color: Color.TEXTPRIMARY,
    marginHorizontal: 10,
    marginVertical: 10,
    gap: 10,
  },
  staticCode: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_20,
    color: Color.BLACK,
  },
  separator: {
    width: 1.5,
    height: '100%',
    backgroundColor: Color.TEXTPRIMARY,
  },
  inputCode: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_20,
    color: Color.BLACK,
    paddingBottom: 5,
    letterSpacing: 2,
    width: '80%',
  },
  btnContainer: {
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    marginTop: 400,
  },
});
