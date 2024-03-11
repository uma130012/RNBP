import {StyleSheet} from 'react-native';
import {TColors} from '../../types';
import {fonts, ms} from '../../theme';

export const styling = (colors: TColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    oopViewStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    noNetIcon: {
      height: 80,
      width: 80,
      tintColor: colors.foreground,
    },
    whoopsText: {
      fontFamily: fonts.bold,
      fontSize: ms(24),
      color: colors.text,
    },
    noNetText: {
      textAlign: 'center',
      color: colors.text,
      fontFamily: fonts.semibold,
      fontSize: ms(20),
    },
    checkConnectionText: {
      textAlign: 'center',
      color: colors.text,
      fontFamily: fonts.medium,
      fontSize: ms(16),
    },
  });
