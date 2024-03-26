import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Field, Formik} from 'formik';
import React, {useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {Button, Container, InputField} from '../../../components';
import {AppDispatch} from '../../../redux/store/store';
import {images} from '../../../theme';
import {AppTheme} from '../../../types';
import {Routes} from '../../routes';
import {signUpValidationSchema} from './helper';
import {styling} from './style';

export function SignUp() {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
  const [isShowConfirmPassword, setIsShowConfirmPassword] =
    useState<boolean>(true);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
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
            navigation.navigate(Routes.otp);
          }}>
          {({handleSubmit, isValid}) => (
            <View>
              <Field
                component={InputField}
                name="fullName"
                placeholder="eg 'John'"
                labelText="Full Name"
                labelStyle={styles.labelTextStyle}
                leftIcon={images.tabIcons.profile}
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
                leftIcon={images.onboard.email}
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
                leftIcon={images.onboard.padlock}
                leftIconStyle={styles.iconTint}
                rightIcon={
                  isShowPassword ? images.onboard.eye : images.onboard.hiddenEye
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
                leftIcon={images.onboard.padlock}
                leftIconStyle={styles.iconTint}
                rightIcon={
                  isShowConfirmPassword
                    ? images.onboard.eye
                    : images.onboard.hiddenEye
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
