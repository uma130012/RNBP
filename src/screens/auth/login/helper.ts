import * as yup from 'yup';
import {Regex} from '../../../utils';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .matches(Regex.email, 'Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .matches(/^\S*$/, 'Passwords should not include white spaces')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export {loginValidationSchema};
