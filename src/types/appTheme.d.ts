import {Theme} from '@react-navigation/native';
import {TColors} from './colors';

export type AppTheme = Theme & {
  dark: boolean;
  colors: Theme.colors & TColors;
};
