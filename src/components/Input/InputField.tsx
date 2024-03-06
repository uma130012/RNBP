import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {InputFieldProps} from '.';
import {LabelText} from '../label/LabelText';
import {styles} from './style';

const InputField = (props: InputFieldProps) => {
  const {
    containerStyle,
    outerInputStyle,
    labelText,
    labelStyle,
    leftIcon,
    leftIconStyle,
    rightIcon,
    rightIconStyle,
    onPressRightIcon,
    errorTextStyle,
    leftLineStyle,
    style,
    value,
    ...rest
  } = props;
  return (
    <View style={[styles.inputMainContainer, containerStyle]}>
      <LabelText style={[styles.labeText, labelStyle]}>{labelText}</LabelText>
      <View style={[styles.outerInput, outerInputStyle]}>
        {leftIcon && (
          <View style={styles.leftIconContainerStyle}>
            <Image
              source={leftIcon}
              style={[styles.iconStyle, styles.leftIconStyle, leftIconStyle]}
            />
            <View style={[styles.leftLineStyle, leftLineStyle]} />
          </View>
        )}
        <TextInput style={[styles.inputStyle, style]} value={value} {...rest} />

        {rightIcon && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <Image
              source={rightIcon}
              style={[styles.iconStyle, styles.rightIconStyle, rightIconStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export {InputField};
