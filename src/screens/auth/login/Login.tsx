import {View, Text} from 'react-native';
import React from 'react';
import {Container, LabelText} from '../../../components';
import {AppTheme} from '../../../types';
import {useTheme} from '@react-navigation/native';

export function Login() {
  const {colors}: AppTheme = useTheme();
  return (
    <Container colors={colors}>
      <View>
        <LabelText>Login</LabelText>
      </View>
    </Container>
  );
}
