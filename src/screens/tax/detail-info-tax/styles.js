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
  sectionBar: {
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
    marginTop: 20,
  },
  sectionTitle: {
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
  },
});
