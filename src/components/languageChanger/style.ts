import {StyleSheet} from 'react-native';
import {TColors} from '../../types';
import {ms} from '../../theme';

export const styling = (colors: TColors) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-end',
    },
    dropContainerStyle: {
      borderColor: colors.foreground,
      width: ms(120),
    },
    textStyle: {
      color: colors.text,
    },
    dropdownContainerStyle: {
      backgroundColor: colors.background,
      shadowColor: colors.foreground,
    },
  });
