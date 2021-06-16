import axios from 'axios';
import setAuthToken from 'src/utils/setAuthToken';

import { USER_LOADED, LOGIN_SUCCESS, AUTH_ERROR, LOGOUT } from './types';

// Login User
export const login = (response) => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: response,
  });

  dispatch(loadUser());
};

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('auth');
      // const res = await axios.get(`${baseUrl}/users/self/`);

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  } else {
    dispatch({ type: AUTH_ERROR });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
