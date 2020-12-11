import ACTION_TYPE from './types';
import axios from 'axios';

let endpointURL = '';
// if production flag
if (process.env.NODE_ENV === 'production') {
  endpointURL = 'https://moodmaker-aca.herokuapp.com/auth';
} else {
  endpointURL = 'http://localhost:4001/auth';
}

export const signUp = (data) => {
  console.log('data:', data);
  return function (dispatch) {
    axios
      .post(`endpointURL${'/signup'}`, {
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
  return function (dispatch) {
    dispatch(loginLoading()); // before we post to the api set loading flag -> flipped to true
    axios
      .post(`endpointURL${'/login'}`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        dispatch(loginSuccess(res)); // on success dispatch success msg to store, place token in local storate
        dispatch(loginLoading()); // trip the login loading flag back to false
      })
      .catch((err) => {
        dispatch(loginFailure(err));
        dispatch(loginLoading()); // trip the login loading flag back to false
      });
  };
};

const loginLoading = () => {
  return {
    type: ACTION_TYPE.LOGIN_LOADING,
  };
};

const loginSuccess = (res) => {
  localStorage.setItem('token', res.data.token);
  return {
    type: ACTION_TYPE.LOGIN_SUCCESS,
    msg: 'login success',
  };
};

const loginFailure = (err) => {
  return {
    type: ACTION_TYPE.LOGIN_FAILURE,
    err,
  };
};
