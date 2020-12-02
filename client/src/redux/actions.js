import ACTION_TYPE from './types';
import axios from 'axios';

export const signUp = (data) => {
  console.log('data:', data);
  return function (dispatch) {
    axios
      .post('http://localhost:4001/auth/signup', {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
      })
      .then(() => dispatch(signUpSuccess()))
      .catch((err) => {
        dispatch(signUpFailure(err));
      });
  };
};

const signUpSuccess = () => {
  return {
    type: ACTION_TYPE.SIGNUP_SUCCESS,
  };
};

const signUpFailure = (err) => {
  return {
    type: ACTION_TYPE.SIGNUP_FAILURE,
    err,
  };
};

export const login = (data) => {
  console.log('data:', data);
  return function (dispatch) {
    axios
      .post('http://localhost:4001/auth/login', {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
      })
      .then(() => dispatch(signUpSuccess()))
      .catch((err) => {
        dispatch(signUpFailure(err));
      });
  };
};

const signUpSuccess = () => {
  return {
    type: ACTION_TYPE.SIGNUP_SUCCESS,
  };
};

const signUpFailure = (err) => {
  return {
    type: ACTION_TYPE.SIGNUP_FAILURE,
    err,
  };
};
