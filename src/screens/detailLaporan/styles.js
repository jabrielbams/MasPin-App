import {StyleSheet} from 'react-native';
import {Color, FontSize, Fonts} from '../../constants';

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
    marginTop: 16,
    marginBottom: 20,
  },
  listInfo: {marginTop: 20, flexDirection: 'column', gap: 25}
});
