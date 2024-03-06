/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-01 12:55:30
 * @ Modified by: Uma
 * @ Modified time: 2024-03-06 17:57:49
 * @ Description:
 */

import {NavigationContainer, Theme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {PropsWithoutRef} from 'react';
import {navigationRef} from '.';
import {ForgotPassword, Login, OTP, Routes, SignUp, Welcome} from '../screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator: React.FC<PropsWithoutRef<{theme: Theme}>> = ({
  theme,
}) => {
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName={Routes.welcome}>
        <Stack.Screen
          name={Routes.welcome}
          options={{headerShown: false}}
          component={Welcome}
        />
        <Stack.Screen name={Routes.login} component={Login} />
        <Stack.Screen name={Routes.signUp} component={SignUp} />
        <Stack.Screen name={Routes.otp} component={OTP} />
        <Stack.Screen name={Routes.forgotPassword} component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
