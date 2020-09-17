import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.131.19.44',
});

export default api;
