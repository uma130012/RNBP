/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-05 11:05:35
 * @ Modified by: Uma
 * @ Modified time: 2024-03-05 15:13:43
 * @ Description:
 */

import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Controller, LabelText, controllerStyle} from '../../../components';
import {View} from 'react-native';
import {AppTheme} from '../../../types';

export function Wallet() {
  const {colors}: AppTheme = useTheme();
  const styles = controllerStyle(colors);

  return (
    <Controller colors={colors}>
      <View style={styles.childContainer}>
        <LabelText style={styles.mainTitle}>Wallet</LabelText>
      </View>
    </Controller>
  );
}
