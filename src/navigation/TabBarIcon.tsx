import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {Routes} from '../screens';
import {images} from '../theme';

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
  route: {name: string};
}

const getTabIconName = (routeName: string) => {
  switch (routeName) {
    case Routes.home:
      return images.tabIcons.home;
    case Routes.wallet:
      return images.tabIcons.wallet;
    case Routes.chart:
      return images.tabIcons.chart;
    case Routes.transaction:
      return images.tabIcons.txn;
    case Routes.profile:
      return images.tabIcons.profile;
    default:
      return images.tabIcons.home;
    // Default icon if route not found
  }
};

export const TabBarIcon: React.FC<TabBarIconProps> = ({
  focused,
  route,
  color,
  size,
}) => {
  const iconName = getTabIconName(route.name);
  return (
    <Image
      source={iconName}
      style={{tintColor: color, width: size, height: size}}
    />
  );
};
