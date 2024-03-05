import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';

import {images} from '../../../theme';
import {styling} from './style';
import {Button, Controller, LabelText} from '../../../components';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../redux/store/store';
import {setLogin} from '../../../redux/slices/user';
import {AppTheme} from '../../../types';

export function Welcome() {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Controller colors={colors}>
      <View style={styles.container}>
        <Image source={images.react_native_logo} style={styles.logo} />
        <LabelText style={styles.mainTitle}>WELCOME</LabelText>
        <LabelText style={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </LabelText>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Login"
          outline={true}
          onPress={() => {
            dispatch(setLogin(true));
          }}
        />
        <Button title="Create an Account" style={{marginTop: 16}} />
      </View>
    </Controller>
  );
}
