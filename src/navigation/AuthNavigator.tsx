/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-01 12:55:30
 * @ Modified by: Uma
 * @ Modified time: 2024-03-06 15:39:54
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
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.welcome}>
        <Stack.Screen name={Routes.welcome} component={Welcome} />
        <Stack.Screen
          name={Routes.login}
          options={{headerShown: true}}
          component={Login}
        />
        <Stack.Screen
          name={Routes.signUp}
          options={{headerShown: true}}
          component={SignUp}
        />
        <Stack.Screen name={Routes.otp} component={OTP} />
        <Stack.Screen name={Routes.forgotPassword} component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
