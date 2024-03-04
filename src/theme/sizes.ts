import {Dimensions} from 'react-native';

// Get the width and height of the device's screen
const {width, height} = Dimensions.get('window');

// Determine the short and long dimensions based on screen orientation
const [shortDimension, longDimension]: [number, number] =
  width < height ? [width, height] : [height, width];

// Define a base width for guideline scaling
const guidelineBaseWidth: number = 350;

// Define a base height for guideline scaling
const guidelineBaseHeight: number = 680;

/**
 * Returns a linear-scaled result of the provided size, based on the device's screen width.
 * @param size {number}
 * @returns {number}
 */
const scale = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size;

/**
 * Returns a linear-scaled result of the provided size, based on the device's screen height.
 * @param size {number}
 * @returns {number}
 */
const verticalScale = (size: number): number =>
  (longDimension / guidelineBaseHeight) * size;

/**
 * Scales the size in a controlled manner, allowing customization of the resize factor (default is 0.5).
 * @param size {number}
 * @param factor {number} - Resize factor (default is 0.5)
 * @returns {number}
 */
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

/**
 * Scales the size in a controlled manner based on screen height, allowing customization of the resize factor (default is 0.5).
 * @param size {number}
 * @param factor {number} - Resize factor (default is 0.5)
 * @returns {number}
 */
const moderateVerticalScale = (size: number, factor: number = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

// Exporting the scaling functions with aliases
export {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
  moderateVerticalScale as mvs,
};
