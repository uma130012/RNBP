import {useTheme} from '@react-navigation/native';
import {Field, Formik} from 'formik';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Container, InputField} from '../../../components';
import {images} from '../../../theme';
import {AppTheme} from '../../../types';
import {styling} from './style';
import {loginValidationSchema} from './helper';
import {AppDispatch} from '../../../redux/store/store';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../../redux/slices';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export function Login() {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Container colors={colors}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={values => {
            console.log(values);
            dispatch(setLogin(true));
          }}>
          {({handleSubmit, isValid}) => (
            <View>
              <Field
                component={InputField}
                name="email"
                placeholder="eg 'Admin@gmail.com'"
                labelText="Email Address"
                labelStyle={styles.labelTextStyle}
                leftIcon={images.loginIcons.email}
                leftIconStyle={styles.iconTint}
                keyboardType="email-address"
                style={styles.inputStyle}
                outerInputStyle={styles.outerInputStyle}
                activeBorderColor={colors.foreground}
                inActiveBorderColor={colors.border}
              />
              <Field
                component={InputField}
                name="password"
                placeholder="Password"
                labelText="Password"
                labelStyle={styles.labelTextStyle}
                leftIcon={images.tabIcons.profile}
                leftIconStyle={styles.iconTint}
                rightIcon={
                  isShowPassword
                    ? images.loginIcons.eye
                    : images.loginIcons.hiddenEye
                }
                rightIconStyle={styles.iconTint}
                secureTextEntry={isShowPassword}
                onPressRightIcon={() => {
                  setIsShowPassword(!isShowPassword);
                }}
                style={styles.inputStyle}
                outerInputStyle={styles.outerInputStyle}
                activeBorderColor={colors.foreground}
                inActiveBorderColor={colors.border}
              />
              <Button
                onPress={() => {
                  handleSubmit();
                }}
                title="Login"
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </Container>
  );
}
