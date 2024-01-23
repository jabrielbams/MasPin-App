import {StyleSheet} from 'react-native';
import {Color, Fonts, FontSize} from '../../constants';

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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    paddingHorizontal: 18,
  },
  featureList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionDivider: {
    marginTop: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },
  otherStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  otherText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_14,
    color: Color.PRIMARY,
  },
});
