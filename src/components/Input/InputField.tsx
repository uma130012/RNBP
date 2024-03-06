import React, {useState} from 'react';
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
    activeBorderColor = '#000',
    inActiveBorderColor = '#d8d8d8',
    style,
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...rest
  } = props;
  const hasError = errors[name] && touched[name];
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <View style={[styles.inputMainContainer, containerStyle]}>
      <LabelText style={[styles.labeText, labelStyle]}>{labelText}</LabelText>
      <View
        style={[
          styles.outerInput,
          outerInputStyle,
          {borderColor: inputFocused ? activeBorderColor : inActiveBorderColor},
        ]}>
        {leftIcon && (
          <View style={styles.leftIconContainerStyle}>
            <Image
              source={leftIcon}
              style={[styles.iconStyle, styles.leftIconStyle, leftIconStyle]}
            />
            <View style={[styles.leftLineStyle, leftLineStyle]} />
          </View>
        )}
        <TextInput
          style={[styles.inputStyle, style]}
          value={value}
          onChangeText={text => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          onFocus={() => setInputFocused(true)}
          onEndEditing={() => setInputFocused(false)}
          {...rest}
        />

        {rightIcon && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <Image
              source={rightIcon}
              style={[styles.iconStyle, styles.rightIconStyle, rightIconStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
      {hasError && (
        <LabelText style={[styles.errorTextStyle, errorTextStyle]}>
          {errors[name]}
        </LabelText>
      )}
    </View>
  );
};

export {InputField};
