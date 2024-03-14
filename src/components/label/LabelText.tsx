import {Text, TextProps} from 'react-native';
import {styles} from './style';

export const LabelText: React.FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.label, style]} {...rest}>
      {children}
    </Text>
  );
};
