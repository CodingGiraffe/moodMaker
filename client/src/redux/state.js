const StoreState = {
  login: {
    msg: '',
    error: '',
    loginLoading: false,
  },
  signup: {
    msg: '',
    error: '',
    signupLoading: false,
  },
  user: {
    username: '',
    email: '',
    avatar: '',
    urls: [],
  },
};

export default StoreState;
