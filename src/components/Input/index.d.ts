import {
  TextInputProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface InputFieldProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  outerInputStyle?: StyleProp<ViewStyle>;
  labelText?: string;
  labelStyle?: StyleProp<TextStyle>;
  leftIcon?: ImageSourcePropType;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIcon?: ImageSourcePropType;
  rightIconStyle?: StyleProp<ImageStyle>;
  onPressRightIcon?: () => void;
  errorTextStyle?: StyleProp<TextStyle>;
  leftLineStyle?: StyleProp<ViewStyle>;
}

export {InputFieldProps};
