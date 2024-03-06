import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppTheme} from '../../../types';
import {useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../redux/store/store';
import {styling} from './style';
import {Button, Container, InputField} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Field, Formik} from 'formik';
import {setLogin} from '../../../redux/slices';
import {images} from '../../../theme';
import {signUpValidationSchema} from './helper';

export function SignUp() {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
  const [isShowConfirmPassword, setIsShowConfirmPassword] =
    useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container colors={colors}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={values => {
            console.log(values);
            dispatch(setLogin(true));
          }}>
          {({handleSubmit, isValid}) => (
            <View>
              <Field
                component={InputField}
                name="fullName"
                placeholder="eg 'John'"
                labelText="Full Name"
                labelStyle={styles.labelTextStyle}
                leftIcon={images.loginIcons.email}
                leftIconStyle={styles.iconTint}
                style={styles.inputStyle}
                outerInputStyle={styles.outerInputStyle}
                activeBorderColor={colors.foreground}
                inActiveBorderColor={colors.border}
              />
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
              <Field
                component={InputField}
                name="confirmPassword"
                placeholder="Confirm Password"
                labelText="Confirm Password"
                labelStyle={styles.labelTextStyle}
                leftIcon={images.tabIcons.profile}
                leftIconStyle={styles.iconTint}
                rightIcon={
                  isShowConfirmPassword
                    ? images.loginIcons.eye
                    : images.loginIcons.hiddenEye
                }
                rightIconStyle={styles.iconTint}
                secureTextEntry={isShowPassword}
                onPressRightIcon={() => {
                  setIsShowConfirmPassword(!isShowPassword);
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
                title="Sign up"
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </Container>
  );
}
