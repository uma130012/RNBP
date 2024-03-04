import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import Button from '../../../components/Button/Button';
import LabelText from '../../../components/Label/LabelText';
import {images} from '../../../theme';
import {styling} from './style';

export function Welcome() {
  const {colors} = useTheme();
  const styles = styling(colors);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={images.react_native_logo} style={styles.logo} />
        <LabelText style={styles.mainTitle}>WELCOME</LabelText>
        <LabelText style={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </LabelText>
      </View>
      <View style={styles.bottomContainer}>
        <Button title="Login" outline={true} />
        <Button title="Create an Account" style={{marginTop: 16}} />
      </View>
    </SafeAreaView>
  );
}
