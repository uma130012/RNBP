import {useTheme} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  Button,
  Container,
  CountDown,
  LabelText,
  ToastMessage,
} from '../../../components';
import {AppTheme} from '../../../types';
import {styling} from './style';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../redux/store/store';
import {setLogin} from '../../../redux/slices';

export function OTP() {
  const CELL_COUNT = 6;
  const {colors}: AppTheme = useTheme();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const styles = styling(colors);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const onResendCodeHandler = () => {
    console.log('Resend Code');
    setIsResendDisabled(true);
  };

  return (
    <Container colors={colors}>
      <View style={{gap: 8}}>
        <LabelText style={styles.title}>Verification Code</LabelText>
        <LabelText style={styles.subTitle}>
          Enter the 6 digit code that you received on your mobile number.
        </LabelText>
      </View>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={styles.codeFieldRoot}
        renderCell={({index, symbol, isFocused}) => (
          <LabelText
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </LabelText>
        )}
      />

      <View style={styles.resendCodeContainer}>
        <LabelText
          style={styles.resendLabel}
          disabled={isResendDisabled}
          onPress={onResendCodeHandler}>
          Resend Code {isResendDisabled === true && 'in'}
          {'  '}
        </LabelText>
        {isResendDisabled === true && (
          <CountDown
            count={60}
            onTimeout={() => {
              setIsResendDisabled(false);
            }}
            propStyle={styles.subTitle}
          />
        )}
      </View>

      <Button
        title={'Verify'}
        style={{marginTop: 16}}
        onPress={() => {
          // Write your logic/functionality here
          if (value?.length > 5) {
            dispatch(setLogin(true));
          } else {
            ToastMessage({
              type: 'error',
              title: 'OTP',
              message: 'Please enter your correct otp',
            });
          }
        }}
      />
    </Container>
  );
}
