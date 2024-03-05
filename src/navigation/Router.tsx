/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-01 12:56:26
 * @ Modified by: Uma
 * @ Modified time: 2024-03-05 13:23:46
 * @ Description:
 */

import {useColorScheme} from 'react-native';
import {dark, light} from '../theme';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';

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
