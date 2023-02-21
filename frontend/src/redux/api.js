import axios from 'axios';

// export const loadProductsApi = async () => {
//   await axios.get('http://localhost:3001/products');
// };

// export const registerUserApi = async (user) => {
//   await axios.post('http://localhost:3001/auth', user);
// };

const userInstance = axios.create({
  baseURL: 'http://localhost:3001/auth',
});

export const signIn = (user) =>
  userInstance.request({ method: 'POST', data: user, url: '/login' });

export const signUp = (user) =>
  userInstance.request({ method: 'POST', data: user, url: '/' });
