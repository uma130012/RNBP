import {
  NavigationContainer,
  Theme,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {PropsWithoutRef} from 'react';
import {ForgotPassword, Login, OTP, Routes, SignUp, Welcome} from '../screens';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const AuthNavigator: React.FC<PropsWithoutRef<{theme: Theme}>> = ({theme}) => {
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.welcome}>
        <Stack.Screen name={Routes.welcome} component={Welcome} />
        <Stack.Screen name={Routes.login} component={Login} />
        <Stack.Screen name={Routes.signUp} component={SignUp} />
        <Stack.Screen name={Routes.otp} component={OTP} />
        <Stack.Screen name={Routes.forgotPassword} component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
