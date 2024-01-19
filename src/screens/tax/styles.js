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
});
