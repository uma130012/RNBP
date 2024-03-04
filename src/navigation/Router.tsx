import {useColorScheme} from 'react-native';
import AuthNavigator from './AuthNavigator';
import {dark, light} from '../theme';

export function Router() {
  // const isLogin = useSelector(
  //   (state: RootState) => state.user.auth.isLogin,
  //   shallowEqual,
  // );

  // return isLogin ? (
  //   <AppNavigator theme={dark} />
  // ) : (
  //   <AuthNavigator theme={dark} />
  // );
  const scheme = useColorScheme();
  return <AuthNavigator theme={scheme === 'dark' ? dark : light} />;
}
