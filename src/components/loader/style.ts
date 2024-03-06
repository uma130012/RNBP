import {StyleSheet} from 'react-native';
import {fonts} from '../../theme';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    fontFamily: fonts.semibold,
    color: '#fff',
  },
});
