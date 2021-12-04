import axios from 'axios';
import { set } from 'immer/dist/internal';
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
  }
};

const getCurrentUser = () => (dispatch, getState) => {};

export { register, login, logout };
