import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {AppTheme} from '../types';

const colors = Object.freeze({
  transparent: 'transparent',
  white: '#fff',
  black: '#000',
});

const light: AppTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
    background: '#FAFAFA',
    foreground: '#1A1A1A',
    silverSand: '#c3c3c3',
  },
};

const dark: AppTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...colors,
    background: '#1A1A1A',
    foreground: '#FAFAFA',
    silverSand: '#3c3c3c', //blackOlive
  },
};
export {light, dark};
