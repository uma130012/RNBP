import {View, SafeAreaView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {containerStyle} from './style';
import {TColors} from '../../types';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {Loader} from '../loader/loader';

interface ContainerProps extends PropsWithChildren {
  readonly colors: TColors;
}

export function Container({children, colors}: ContainerProps) {
  const styles = containerStyle(colors);
  const isLoading = useSelector(
    (state: RootState) => state.loader.isLoading,
    shallowEqual,
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Loader isLoading={isLoading} />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}
