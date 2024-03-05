/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-01 12:57:29
 * @ Modified by: Uma
 * @ Modified time: 2024-03-05 14:54:32
 * @ Description:
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {Chart, Home, Profile, Routes, Transaction, Wallet} from '../screens';
import {TabBarIcon} from './TabBarIcon';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          TabBarIcon({focused, color, size, route}),
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
      })}>
      <Tab.Screen name={Routes.home} component={Home} />
      <Tab.Screen name={Routes.wallet} component={Wallet} />
      <Tab.Screen name={Routes.chart} component={Chart} />
      <Tab.Screen name={Routes.transaction} component={Transaction} />
      <Tab.Screen name={Routes.profile} component={Profile} />
    </Tab.Navigator>
  );
};
