import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const api = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export const register = (userData) => api.post('register/', userData);
export const login = (credentials) => api.post('login/', credentials);
export const getProfile = () => api.get('profile/');
export const updateProfile = (data) => api.patch('profile/', data);

// New function to check if the token is still valid
export const checkAuth = () => api.get('profile/');

export default api;

