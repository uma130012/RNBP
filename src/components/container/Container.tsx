import {View, SafeAreaView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {containerStyle} from './style';
import {TColors} from '../../types';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {Loader} from '../loader/loader';
import {useNetInfo} from '@react-native-community/netinfo';
import {InternetInfo} from '../index';

interface ContainerProps extends PropsWithChildren {
  readonly colors: TColors;
}

export function Container({children, colors}: ContainerProps) {
  const styles = containerStyle(colors);
  const isLoading = useSelector(
    (state: RootState) => state.loader.isLoading,
    shallowEqual,
  );
  const {isConnected} = useNetInfo();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Loader isLoading={isLoading} />
      <View style={styles.container}>
        {isConnected === false ? (
          <InternetInfo isConnected={!isConnected} />
        ) : (
          children
        )}
      </View>
    </SafeAreaView>
  );
}
