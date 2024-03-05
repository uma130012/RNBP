/**
 * @ Copyright: © 2024 Antier Solutions Pvt. Ltd.
 * @ Author: Uma <uma.shankar@antiersolutions.com>
 * @ Create Time: 2024-03-01 12:57:29
 * @ Modified by: Uma
 * @ Modified time: 2024-03-05 18:04:56
 * @ Description:
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {Chart, Home, Profile, Routes, Transaction, Wallet} from '../screens';
import {TabBarIcon} from './TabBarIcon';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          TabBarIcon({focused, color, size, route}),
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
      })}>
      <Tab.Screen
        name={Routes.home}
        options={{
          tabBarLabel: t('tabs.home'),
        }}
        component={Home}
      />
      <Tab.Screen
        name={Routes.wallet}
        options={{
          tabBarLabel: t('tabs.wallet'),
        }}
        component={Wallet}
      />
      <Tab.Screen
        name={Routes.chart}
        options={{
          tabBarLabel: t('tabs.chart'),
        }}
        component={Chart}
      />
      <Tab.Screen
        name={Routes.transaction}
        options={{
          tabBarLabel: t('tabs.txn'),
        }}
        component={Transaction}
      />
      <Tab.Screen
        name={Routes.profile}
        options={{
          tabBarLabel: t('tabs.profile'),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
