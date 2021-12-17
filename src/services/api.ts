import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.142.43.18:3333',
});

export default api;
