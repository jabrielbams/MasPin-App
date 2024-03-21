import {StyleSheet} from 'react-native';
import {Color, FontSize, Fonts} from '../../../constants';

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
    paddingHorizontal: 16,
    marginTop: 20,
  },
  contentItems: {
    flex: 1,
    flexDirection: 'column',
  },
  searchBox: {
    backgroundColor: Color.TEXTFIELD,
    flexDirection: 'row',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 16,
  },
  placeholder: {
    color: Color.TEXTBOX,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_14,
    width: '80%',
  },
  sectionBox: {flexDirection: 'row', justifyContent: 'space-between'},
  daftarHarga: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },
  dateBox: {
    backgroundColor: Color.DISABLE,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  itemsName: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
    marginTop: 5,
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  price: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_12,
    color: Color.BLACK,
  },
  qtyBox: {
    backgroundColor: Color.PRIMARY,
    width: 2,
    height: '65%',
  },
  qty: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_12,
    color: Color.PRIMARY,
  },

  card: {},
});
