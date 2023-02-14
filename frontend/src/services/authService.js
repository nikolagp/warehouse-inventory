// import axios from 'axios';
// import { toast } from 'react-toastify';

// export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// export const validateEmail = (email) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };

// // Register User
// export const registerUser = async (userData) => {
//   const { username, password } = userData;
//   try {
//     if (!username || !password) {
//       return toast.error('All fields are required');
//     }
//     if (password.length < 6) {
//       return toast.error('Password must be at least 6 characters');
//     }
//     const response = await axios.post(`${BACKEND_URL}/auth`, userData, {
//       // withCredentials: true,
//     });
//     if (response.statusText === 'OK') {
//       toast.success('User registered successfully');
//     }
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Login User
// export const loginUser = async (userData) => {
//   try {
//     const response = await axios.post(`${BACKEND_URL}/auth/login`, userData);
//     if (response.statusText === 'OK') {
//       toast.success('Login Successful...');
//     }
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // export const loginUser = async (userData) => {
// //   const { username, password } = userData;
// //   try {
// //     if (!username || !password) {
// //       return toast.error('All fields are required');
// //     }
// //     if (password.length < 6) {
// //       return toast.error('Password must be at least 6 characters');
// //     }
// //     const response = await axios.post(`${BACKEND_URL}/auth/login`, userData, {
// //       // withCredentials: true,
// //     });
// //     if (response.statusText === 'OK') {
// //       toast.success('User logged in successfully');
// //     }
// //     return response.data;
// //   } catch (error) {
// //     const message =
// //       (error.response && error.response.data && error.response.data.message) ||
// //       error.message ||
// //       error.toString();
// //     toast.error(message);
// //   }
// // };
