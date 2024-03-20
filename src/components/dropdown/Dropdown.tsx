import {View, Text} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from '.';
import {DropDownDataType} from '../../types';
import {styles} from './style';

export const DropDown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    data = [],
    defaultValue,
    placeholder,
    containerStyle,
    dropdownStyle,
    dropdownContainerStyle,
    selectedTextStyle,
    placeholderStyle,
    onChange,
    disabled = false,
    activeColor,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Dropdown
        data={data}
        value={defaultValue}
        placeholder={placeholder}
        disable={disabled}
        maxHeight={300}
        labelField={'label'}
        valueField={'value'}
        style={[styles.dropdownStyle, dropdownStyle]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        itemTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        containerStyle={[styles.containerStyle, dropdownContainerStyle]}
        itemContainerStyle={styles.itemContainerStyle}
        activeColor={activeColor}
        onChange={(item: DropDownDataType) => {
          if (onChange) onChange(item.value);
        }}
      />
    </View>
  );
};
