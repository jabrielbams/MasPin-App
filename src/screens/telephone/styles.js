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
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  titleSection: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 24,
    color: Color.BLACK,
  },
  content: {
    paddingHorizontal: 16,
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 20,
    marginVertical: 20,
    marginHorizontal: 16,
  },
});
