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
