import {StyleSheet, Text, TextProps} from 'react-native';
import {colors, fonts, ms} from '../../theme';

const LabelText: React.FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.label, style]} {...rest}>
      {children}
    </Text>
  );
};

export default LabelText;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.regular,
    fontSize: ms(14),
    color: colors.white,
  },
});
