import {ToastType} from 'react-native-toast-message';

export type ToastProps = {
  type?: ToastType;
  title?: string;
  message: string;
};
