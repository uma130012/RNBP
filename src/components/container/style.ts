import {StyleSheet} from 'react-native';
import {fonts, ms} from '../../theme';
import {TColors} from '../../types';

export const containerStyle = (colors: TColors) =>
  StyleSheet.create({
    mainContainer: {flex: 1, backgroundColor: colors.background},
    container: {
      flex: 1,
      margin: 16,
    },
    childContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    mainTitle: {
      fontFamily: fonts.bold,
      fontSize: ms(24),
      color: colors.text,
    },
  });
