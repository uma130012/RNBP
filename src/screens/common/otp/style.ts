import {StyleSheet} from 'react-native';
import {fonts, ms} from '../../../theme';
import {TColors} from '../../../types';

export const styling = (colors: TColors) =>
  StyleSheet.create({
    codeFieldRoot: {
      marginVertical: 16,
    },
    cell: {
      width: 44,
      height: 44,
      lineHeight: 42,
      fontSize: ms(24),
      borderWidth: 2,
      borderColor: colors.silverSand,
      textAlign: 'center',
      borderRadius: 4,
      color: colors.text,
    },
    focusCell: {
      borderColor: colors.foreground,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    title: {
      textAlign: 'center',
      fontFamily: fonts.bold,
      fontSize: ms(24),
      color: colors.text,
    },
    subTitle: {
      textAlign: 'center',
      color: colors.text,
      fontFamily: fonts.regular,
      fontSize: ms(14),
    },
    resendLabel: {
      textAlign: 'center',
      color: colors.text,
      fontFamily: fonts.semibold,
    },
    resendCodeContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
