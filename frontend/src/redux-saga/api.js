import axios from 'axios';

export const loadUsersApi = async () =>
  await axios.get('http://localhost:3001/users');
