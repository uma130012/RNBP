import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {fonts, ms} from '../../theme';
import LabelText from '../Label/LabelText';
import {useTheme} from '@react-navigation/native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  leftImg?: ImageSourcePropType;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  disabled,
  leftImg,
  textStyle,
  outline = false,
  ...rest
}) => {
  const {colors} = useTheme();
  const styles = styling(colors);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.buttonStyle,
        style,
        outline ? styles.outline : styles.filled,
        {opacity: disabled ? 0.9 : 1},
      ]}
      disabled={disabled}
      {...rest}>
      {leftImg && <Image source={leftImg} style={styles.leftImage} />}
      <LabelText
        style={[
          styles.textStyle,
          textStyle,
          {color: outline ? colors.text : colors.background},
        ]}>
        {title}
      </LabelText>
    </TouchableOpacity>
  );
};

export default Button;

const styling = (colors: any) =>
  StyleSheet.create({
    buttonStyle: {
      maxHeight: ms(40),
      height: ms(40),
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderRadius: 5,
      flexDirection: 'row',
    },
    outline: {
      borderColor: colors.foreground,
      borderWidth: 1,
    },

    filled: {
      backgroundColor: colors.foreground,
    },

    textStyle: {
      fontSize: ms(14),
      fontFamily: fonts.bold,
      alignSelf: 'center',
    },

    leftImage: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginRight: 9,
    },
  });
