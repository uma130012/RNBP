import {refresh} from '@react-native-community/netinfo';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Modal, View} from 'react-native';
import {images} from '../../theme';
import {AppTheme} from '../../types';
import {Button} from '../button/Button';
import {LabelText} from '../label/LabelText';
import {styling} from './style';

export const InternetInfo = ({isConnected}: {isConnected: boolean}) => {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const {t} = useTranslation();
  const onPressRefresh = () => {
    refresh();
  };
  return (
    <Modal
      supportedOrientations={['landscape', 'portrait']}
      transparent
      visible={isConnected}
      statusBarTranslucent={true}>
      <View style={styles.container}>
        <Image source={images.common.internet_lost} style={styles.noNetIcon} />
        <View style={styles.oopViewStyle}>
          <LabelText style={styles.whoopsText}>{t('errors.whoops')}</LabelText>
          <LabelText style={styles.noNetText}>
            {t('errors.noInternet')}
          </LabelText>
          <LabelText style={styles.checkConnectionText}>
            {t('errors.checkConnection')}
          </LabelText>
          <Button
            onPress={() => onPressRefresh()}
            title={t('errors.refresh')}
            style={{marginTop: 16}}
          />
        </View>
      </View>
    </Modal>
  );
};
