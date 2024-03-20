import type {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface DropdownProps {
  data: DropDownDataType[];
  defaultValue?: string;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  dropdownContainerStyle?: StyleProp<ViewStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  onChange?: (item: string) => void;
  disabled?: boolean;
  activeColor?: string;
}
