import Toast from 'react-native-toast-message';
import {NativeModules, Platform, StatusBar} from 'react-native';
import {ToastProps} from '.';
import {styles} from './style';

const {
  StatusBarManager: {HEIGHT},
} = NativeModules;

export const ToastMessage = ({
  type = 'success',
  title = '',
  message,
}: ToastProps) => {
  Toast.show({
    type: type,
    text1: title,
    text2: message,
    visibilityTime: 2000,
    topOffset: Platform.OS === 'ios' ? HEIGHT : StatusBar.currentHeight,
    text1Style: styles.titleStyle,
    text2Style: styles.subTitleStyle,
  });
};
