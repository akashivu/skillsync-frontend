
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default API;
export const register = (userData) => API.post('/register', userData);
export const login = (userData) => API.post('/login', userData);
