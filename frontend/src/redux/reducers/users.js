import * as type from '../types';

const initialState = {
  error: null,
  isLoggedIn: false,
};

// Fetch all the products
const registerUser = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_REGISTER_REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case type.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case type.USER_REGISTER_FAILED:
      return {
        ...state,
        error: action.message,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_LOGIN_REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case type.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case type.USER_LOGIN_FAILED:
      return {
        ...state,
        error: action.message,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export { registerUser, loginUser };
