import * as type from '../types';

const initialState = {
  name: null,
  error: null,
  isLoggedIn: false,
};

const authUser = (state = initialState, action) => {
  switch (action.type) {
    // User REGISTER
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
    // User LOGIN
    case type.USER_LOGIN_REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case type.USER_LOGIN_SUCCESS:
      return {
        name: action.payload.name,
        error: null,
        isLoggedIn: true,
      };
    case type.USER_LOGIN_FAILED:
      return {
        ...state,
        error: action.message,
        isLoggedIn: false,
      };
    // Login STATUS
    case type.LOGIN_STATUS_REQUESTED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case type.LOGIN_STATUS_SUCCESS:
      return {
        error: null,
        name: action.payload.name,
        isLoggedIn: true,
      };
    case type.LOGIN_STATUS_FAILED:
      return {
        ...state,
        error: action.message,
        isLoggedIn: false,
      };
    // Set login status
    case type.SET_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    // Set name
    case type.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export { authUser };

// const loginUser = (state = initialState, action) => {
//   switch (action.type) {
//     case type.USER_LOGIN_REQUESTED:
//       return {
//         ...state,
//         isLoggedIn: false,
//       };
//     case type.USER_LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoggedIn: true,
//       };
//     case type.USER_LOGIN_FAILED:
//       return {
//         ...state,
//         error: action.message,
//         isLoggedIn: false,
//       };
//     case type.SET_NAME:
//       return {
//         ...state,
//         name: action.name,
//       };
//     default:
//       return state;
//   }
// };
