import {StyleSheet} from 'react-native';
import {TColors} from '../../../types';
import {fonts, ms} from '../../../theme';

export const styling = (colors: TColors) =>
  StyleSheet.create({
    outerInputStyle: {
      borderColor: colors.border,
    },
    iconTint: {
      tintColor: '#d3d3d3',
    },

    labelTextStyle: {
      color: colors.text,
    },

    inputStyle: {
      color: colors.text,
    },

    headerTitle: {
      fontFamily: fonts.bold,
      fontSize: ms(24),
      color: colors.text,
    },
    subHeaderTitle: {
      fontFamily: fonts.medium,
      fontSize: ms(14),
      marginBottom: ms(20),
      color: colors.text,
    },
  });
