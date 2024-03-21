import {StyleSheet} from 'react-native';
import {FontSize, Fonts, Color} from '../../constants';

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
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: Color.BLACK,
    fontSize: 16,
    fontFamily: Fonts.MEDIUM,
  },
  sectionList: {
    marginTop: 16,
    flexDirection: 'column',
    gap: 16,
  },

  containerMain: {
    backgroundColor: '#000000',
    width: '100%',
    height: 110,
    borderRadius: 8,
    padding: 5,
  },
  containerInner: {
    backgroundColor: Color.OUTLINE_GRAY,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    padding: 4,
    justifyContent: 'center',
  },
  innerBox: {
    backgroundColor: Color.BLACK,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: 'center',
    paddingBottom: 18,
  },

  btnContainer: {
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    marginTop: 400,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: Color.HEADER_GRAY,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginRight: 4,
    width: 40,
    textAlign: 'center',
    fontSize: 24,
    color: Color.WHITE,
  },
  inputLetter: {
    borderWidth: 1,
    borderColor: Color.HEADER_GRAY,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginLeft: 4,
    width: 40,
    textAlign: 'center',
    fontSize: 24,
    color: Color.WHITE,
  },
  codeArea: {
    borderWidth: 1,
    borderColor: Color.HEADER_GRAY,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginRight: 10,
    width: 40,
    textAlign: 'center',
    fontSize: 24,
    color: Color.WHITE,
  },

  // section pajak input
  headerBox: {
    marginTop: 20,
    marginBottom: 24,
  },
  titleSection: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  desc: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.TEXTSECONDARY,
  },
});
