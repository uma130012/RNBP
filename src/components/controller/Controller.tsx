import {View, SafeAreaView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {controllerStyle} from './style';
import {TColors} from '../../types';

interface ControllerProps extends PropsWithChildren {
  readonly colors: TColors;
}

export function Controller({children, colors}: ControllerProps) {
  const styles = controllerStyle(colors);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}
