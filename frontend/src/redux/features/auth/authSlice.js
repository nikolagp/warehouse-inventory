import { createSlice } from '@reduxjs/toolkit';

const username = JSON.parse(localStorage.getItem('username'));

const initialState = {
  isLoggedIn: false,
  username: username ? username : '',
  // user: {
  //   name: '',
  //   email: '',
  // },
  userID: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem('username', JSON.stringify(action.payload));
      state.username = action.payload;
    },
    // SET_USER(state, action) {
    //   const profile = action.payload;
    //   state.user.name = profile.name;
    //   state.user.email = profile.email;
    // },
  },
});

export const { SET_LOGIN, SET_USERNAME } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUsername = (state) => state.auth.username;
// export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
