import axios from 'axios';

export const loadProductsApi = async () => {
  await axios.get('http://localhost:3001/products');
};

export const registerUserApi = async (user) => {
  await axios.post('http://localhost:3001/auth', user);
};
