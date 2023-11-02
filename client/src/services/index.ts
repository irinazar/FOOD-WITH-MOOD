import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true,
});

export default apiService;
