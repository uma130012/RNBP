import {useTheme} from '@react-navigation/native';
import {Field, Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import {Button, Container, InputField, LabelText} from '../../../components';
import {images} from '../../../theme';
import {AppTheme} from '../../../types';
import {Regex} from '../../../utils';
import {styling} from './style';

export function ForgotPassword() {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);

  const forgotPasswordValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .matches(Regex.email, 'Please enter valid email')
      .required('Email is required'),
  });

  return (
    <Container colors={colors}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <LabelText style={styles.headerTitle}>Reset Password</LabelText>
        <LabelText style={styles.subHeaderTitle}>
          Enter email, a password reset link will be sent to your email
        </LabelText>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={values => {
            console.log(values);
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

              <Button
                onPress={() => {
                  handleSubmit();
                }}
                title="Send Reset Link"
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </Container>
  );
}
