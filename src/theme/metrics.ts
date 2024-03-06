import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const metrics = Object.freeze({
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
});
