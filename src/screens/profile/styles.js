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
  titleSection: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 24,
    color: Color.BLACK,
  },
  dividerStyle: {
    height: 4,
    width: '100%',
    backgroundColor: Color.LIGHT_GRAY,
  },
  content: {
    paddingHorizontal: 16,
  },

  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  profilePicture: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },

  greetings: {
    fontFamily: Fonts.SEMIBOLD,
    color: Color.BLACK,
    fontSize: 16,
    marginBottom: 8,
  },

  settingsContainer: {
    flexDirection: 'column',
    gap: 16,
    marginVertical: 20,
    marginHorizontal: 16,
  },
});
