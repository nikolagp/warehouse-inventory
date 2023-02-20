// import { createSlice } from '@reduxjs/toolkit';

// // const name = JSON.parse(localStorage.getItem('name'));

// const initialState = {
//   // name: name ? name : '',
//   isLoggedIn: false,
//   isLoading: false,
//   users: [],
// };

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     setLogin(state, action) {
//       state.isLoggedIn = action.payload;
//     },
//     setName(state, action) {
//       localStorage.setItem('name', JSON.stringify(action.payload));
//       state.name = action.payload;
//     },
//     registerUsers(state, action) {
//       state.users = action.payload;
//     },
//   },
// });

// export const { setLogin, setName, registerUsers } = usersSlice.actions;

// export const selectIsLoggedIn = (state) => state.app.isLoggedIn;
// export const selectName = (state) => state.app.name;

// export default usersSlice.reducer;
