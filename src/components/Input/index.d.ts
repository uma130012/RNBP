import {
  TextInputProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {FormikProps, FieldInputProps} from 'formik';

interface FormikInputProps {
  field: FieldInputProps;
  form: FormikProps;
}

interface InputFieldProps extends TextInputProps, FormikInputProps {
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
  activeBorderColor?: string;
  inActiveBorderColor?: string;
}

export {InputFieldProps, FormikInputProps};
