import { combineReducers } from 'redux';
import ACTION_TYPE from './types';
import StoreState from './state';

const loginreducer = (state = StoreState.login, action) => {
  console.log('action : ', action);
  switch (action.type) {
    case ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        msg: action.msg,
      };
    case ACTION_TYPE.LOGIN_LOADING:
      return {
        ...state,
        loginLoading: !state.loginLoading,
      };
    default:
      return state;
  }
};

const userReducer = (state = StoreState.user, action) => {
  return state;
};

export default combineReducers({
  login: loginreducer,
  user: userReducer,
});
