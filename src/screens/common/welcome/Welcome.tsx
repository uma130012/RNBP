import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';

import {images} from '../../../theme';
import {styling} from './style';
import {Button, Container, LabelText} from '../../../components';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../redux/store/store';
import {setLogin} from '../../../redux/slices/user';
import {AppTheme} from '../../../types';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {Routes} from '../../routes';

export function Welcome() {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <Container colors={colors}>
      <View style={styles.container}>
        <Image source={images.react_native_logo} style={styles.logo} />
        <LabelText style={styles.mainTitle}>{t('splash.welcome')}</LabelText>
        <LabelText style={styles.subTitle}>{t('splash.subHeading')}</LabelText>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title={t('login.login')}
          outline={true}
          onPress={() => {
            dispatch(setLogin(true));
          }}
        />
        <Button
          title={t('splash.createAccount')}
          style={{marginTop: 16}}
          onPress={() => {
            navigation.navigate(Routes.login);
          }}
        />
      </View>
    </Container>
  );
}
