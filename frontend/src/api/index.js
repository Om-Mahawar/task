import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchItems = () => API.get('/items');

export const signIn = (formData) => API.post('/users/signin', formData);

export const signUp = (formData) => API.post('/users/signup', formData);

export const addToCart = (data) => API.post('/users/cart', data);

export const placeOrder = () => API.post('/users/placeorder');
