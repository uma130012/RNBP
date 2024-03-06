import {View, SafeAreaView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {containerStyle} from './style';
import {TColors} from '../../types';

interface ContainerProps extends PropsWithChildren {
  readonly colors: TColors;
}

export function Container({children, colors}: ContainerProps) {
  const styles = containerStyle(colors);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}
