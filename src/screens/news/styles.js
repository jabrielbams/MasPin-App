import {StyleSheet} from 'react-native';
import {Color, FontSize, Fonts} from '../../constants';

export default StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: Color.WHITE,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 32,
    flexGrow: 1,
  },
  searchContent: {marginTop: 20, paddingHorizontal: 16},
  contentContainer: {
    flexDirection: 'column',
    marginHorizontal: 16,
    marginTop: 24,
    gap: 24,
    flex: 1,
  },
});
