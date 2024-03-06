import {StyleSheet} from 'react-native';
import {fonts, metrics} from '../../theme';

export const styles = StyleSheet.create({
  mainView: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    flex: 1,
  },
  loadingText: {
    fontFamily: fonts.semibold,
    color: '#fff',
  },
});
