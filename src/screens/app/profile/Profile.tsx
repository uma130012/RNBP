/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-05 11:11:39
 * @ Modified by: Uma
 * @ Modified time: 2024-03-05 15:18:17
 * @ Description:
 */

import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Controller,
  LabelText,
  controllerStyle,
} from '../../../components';
import {View} from 'react-native';
import {AppTheme} from '../../../types';
import {resetReduxPersistData} from '../../../redux/reset/resetRedux';

export function Profile() {
  const {colors}: AppTheme = useTheme();
  const styles = controllerStyle(colors);

  return (
    <Controller colors={colors}>
      <View style={styles.childContainer}>
        <LabelText style={styles.mainTitle}>Profile</LabelText>
        <Button
          title="Logout"
          style={{width: '50%', alignSelf: 'center'}}
          onPress={() => {
            resetReduxPersistData();
          }}
        />
      </View>
    </Controller>
  );
}
