import {StyleSheet} from 'react-native';
import {TColors} from '../../../types';

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
  });
