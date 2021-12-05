import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from '../actions/authActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post('/users/signup', credentials);
    dispatch(registerSuccess(data));
    token.set(data.token);
  } catch (error) {
    dispatch(registerError(error));
    alert('Something went wrong! Try again!');
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post('/users/login', credentials);
    dispatch(loginSuccess(data));
    token.set(data.token);
  } catch (error) {
    dispatch(loginError(error));
    alert('Something went wrong! Try again!');
  }
};

const logout = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    const { data } = await axios.post('/users/logout');
    dispatch(logoutSuccess(data));
    token.unset();
  } catch (error) {
    dispatch(logoutError(error));
    alert('Something went wrong! Try again!');
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const { data } = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
    alert('Something went wrong! Try again!');
  }
};

export { register, login, logout, getCurrentUser };
