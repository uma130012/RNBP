import {useEffect} from 'react';
import {BackHandler} from 'react-native';

export const useBackHandler = (handler: () => boolean): void => {
  useEffect(() => {
    const backAction = (): boolean => {
      return handler();
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [handler]);
};

/*<----------------------- USES ---------------------->

import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useBackHandler } from './useBackHandler';

const MyComponent = () => {
  // Define the back button handler
  const backHandler = (): boolean => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => BackHandler.exitApp() },
    ]);
    return true; // Prevent default behavior (navigation)
  };

  // Use the custom hook
  useBackHandler(backHandler);

  return (
    <View style={styles.container}>
      <Text>Press back button to see the alert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
*/
