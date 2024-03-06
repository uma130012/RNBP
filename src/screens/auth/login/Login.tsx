import {View} from 'react-native';
import React, {useState} from 'react';
import {Container, InputField, LabelText} from '../../../components';
import {AppTheme} from '../../../types';
import {useTheme} from '@react-navigation/native';
import {images} from '../../../theme';

export function Login() {
  const {colors}: AppTheme = useTheme();
  const [text, setText] = useState('');
  return (
    <Container colors={colors}>
      <View>
        <InputField
          labelText="Name"
          leftIcon={images.tabIcons.profile}
          rightIcon={images.tabIcons.profile}
          value={text}
          onChangeText={text => {
            setText(text);
          }}
        />
      </View>
    </Container>
  );
}
