import {StyleSheet} from 'react-native';
import {fonts, ms} from '../../theme';

export const styles = StyleSheet.create({
  inputMainContainer: {
    marginBottom: 5,
  },

  labeText: {
    fontSize: ms(12),
  },

  outerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(48),
    borderWidth: 1,
    paddingHorizontal: 8,
    marginTop: ms(8),
    marginBottom: ms(8),
    borderRadius: 8,
  },

  inputStyle: {
    fontSize: ms(14),
    fontFamily: fonts.medium,
    height: ms(44),
    flex: 1,
  },

  iconStyle: {
    width: ms(20),
    height: ms(20),
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  leftIconContainerStyle: {
    flexDirection: 'row',
  },

  leftIconStyle: {marginRight: 8},

  rightIconStyle: {marginLeft: 8},

  leftLineStyle: {
    backgroundColor: '#d3d3d3',
    width: 1,
    marginRight: 8,
    height: ms(28),
  },

  errorTextStyle: {
    fontSize: ms(10),
    color: 'red',
  },
});
