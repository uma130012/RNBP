import Toast from 'react-native-toast-message';
import {ToastProps} from '.';
import {metrics} from '../../theme';
import {styles} from './style';

export const ToastMessage = ({
  type = 'success',
  title = '',
  message,
}: ToastProps) => {
  Toast.show({
    type: type,
    text1: title,
    text2: message,
    visibilityTime: 1500,
    topOffset: metrics.statusBarHeight,
    text1Style: styles.titleStyle,
    text2Style: styles.subTitleStyle,
  });
};
