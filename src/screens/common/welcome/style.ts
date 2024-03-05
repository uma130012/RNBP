import {StyleSheet} from 'react-native';
import {fonts, ms} from '../../../theme';
import {TColors} from '../../../types';

export const styling = (colors: TColors) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    logo: {height: ms(100), width: ms(100), tintColor: colors.foreground},
    mainTitle: {
      fontFamily: fonts.bold,
      fontSize: ms(24),
      color: colors.text,
    },
    subTitle: {
      textAlign: 'center',
      color: colors.text,
    },
    bottomContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
