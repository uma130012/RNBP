/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-05 11:09:33
 * @ Modified by: Uma
 * @ Modified time: 2024-03-06 10:51:56
 * @ Description:
 */

import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Container, LabelText, containerStyle} from '../../../components';
import {View} from 'react-native';
import {AppTheme} from '../../../types';
import {useTranslation} from 'react-i18next';

export function Chart() {
  const {colors}: AppTheme = useTheme();
  const styles = containerStyle(colors);
  const {t} = useTranslation();
  return (
    <Container colors={colors}>
      <View style={styles.childContainer}>
        <LabelText style={styles.mainTitle}>{t('tabs.chart')}</LabelText>
      </View>
    </Container>
  );
}
