import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {LabelText} from '../label/LabelText';
import {styles} from './style';

export const Loader = ({isLoading}: {isLoading: boolean}) => {
  return (
    <Modal
      supportedOrientations={['landscape', 'portrait']}
      transparent
      visible={isLoading}
      statusBarTranslucent={true}>
      <View style={styles.mainView}>
        <ActivityIndicator animating={isLoading} size={'large'} color="#fff" />
        <LabelText style={[styles.loadingText]}> Loading...</LabelText>
      </View>
    </Modal>
  );
};
