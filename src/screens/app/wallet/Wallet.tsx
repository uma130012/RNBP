/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-05 11:05:35
 * @ Modified by: Uma
 * @ Modified time: 2024-03-05 18:08:33
 * @ Description:
 */

import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Controller, LabelText, controllerStyle} from '../../../components';
import {View} from 'react-native';
import {AppTheme} from '../../../types';
import {useTranslation} from 'react-i18next';

export function Wallet() {
  const {colors}: AppTheme = useTheme();
  const styles = controllerStyle(colors);
  const {t} = useTranslation();
  return (
    <Controller colors={colors}>
      <View style={styles.childContainer}>
        <LabelText style={styles.mainTitle}>{t('tabs.wallet')}</LabelText>
      </View>
    </Controller>
  );
}
