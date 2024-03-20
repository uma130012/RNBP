import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {
  Button,
  Container,
  LabelText,
  LanguageChanger,
} from '../../../components';
import {images} from '../../../theme';
import {AppTheme} from '../../../types';
import {Routes} from '../../routes';
import {styling} from './style';

export function Welcome() {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Container colors={colors}>
      <LanguageChanger />
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
            navigation.navigate(Routes.login);
          }}
        />
        <Button
          title={t('splash.createAccount')}
          style={{marginTop: 16}}
          onPress={() => {
            navigation.navigate(Routes.signUp);
          }}
        />
      </View>
    </Container>
  );
}
