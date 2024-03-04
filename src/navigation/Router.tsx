import {useColorScheme} from 'react-native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import {dark, light} from '../theme';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';

export function Router() {
  const scheme = useColorScheme();
  const isLogin = useSelector(
    (state: RootState) => state.user.isLogin,
    shallowEqual,
  );
  return isLogin ? (
    <AppNavigator theme={scheme === 'dark' ? dark : light} />
  ) : (
    <AuthNavigator theme={scheme === 'dark' ? dark : light} />
  );
}
