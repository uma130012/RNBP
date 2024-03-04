import {StyleSheet} from 'react-native';
import {fonts, ms} from '../../../theme';

export const styling = (colors: any) =>
  StyleSheet.create({
    mainContainer: {flex: 1, backgroundColor: colors.background},
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 16,
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
      margin: 16,
    },
  });
