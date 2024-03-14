import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Field, Formik} from 'formik';
import React, {useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {
  Button,
  Container,
  InputField,
  LabelText,
  ToastMessage,
} from '../../../components';
import {setLogin} from '../../../redux/slices';
import {AppDispatch} from '../../../redux/store/store';
import {images} from '../../../theme';
import {AppTheme} from '../../../types';
import {Routes} from '../../routes';
import {loginValidationSchema} from './helper';
import {styling} from './style';

export function Login() {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <Container colors={colors}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <LabelText style={styles.headerTitle}>Welcome Back !!</LabelText>
        <LabelText style={styles.subHeaderTitle}>
          Please login to continue
        </LabelText>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={values => {
            console.log(values);
            dispatch(setLogin(true));
            ToastMessage({
              title: 'Login',
              message: 'Logged in successfully...!',
            });
          }}>
          {({handleSubmit, isValid}) => (
            <View>
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
              <LabelText
                style={styles.forgetPasswordText}
                onPress={() => {
                  navigation.navigate(Routes.forgotPassword);
                }}>
                Forgot password?
              </LabelText>
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
