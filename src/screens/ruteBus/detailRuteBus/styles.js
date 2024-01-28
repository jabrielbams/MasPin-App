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
  innerHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
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
    marginTop: 20,
  },
  sectionText: {
    color: Color.BLACK,
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.dp_16,
  },
  descBus: {
    color: Color.TEXTPRIMARY,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
    lineHeight: 20,
  },
  busSection: {marginVertical: 20, flexDirection: 'column', gap: 8},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
