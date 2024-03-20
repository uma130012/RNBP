import {StyleSheet} from 'react-native';
import {fonts, ms} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: ms(44),
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#1A1A1A',
  },
  dropdownStyle: {
    width: '100%',
    paddingHorizontal: 16,
  },
  containerStyle: {
    backgroundColor: '#c3c3c3',
    borderWidth: 0,
    borderRadius: 4,
    marginTop: 6,
  },

  placeholderStyle: {
    fontSize: ms(14),
    color: '#000',
    fontFamily: fonts.regular,
  },
  selectedTextStyle: {
    fontSize: ms(14),
    color: '#000',
    fontFamily: fonts.regular,
  },
  itemContainerStyle: {},
});
