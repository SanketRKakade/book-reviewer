import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchBooks = () => API.get('/books');
export const fetchBook = (id) => API.get(`/books/${id}`);
export const postReview = (review) => API.post('/reviews', review);
export const fetchReviews = (bookId) => API.get(`/reviews?bookId=${bookId}`);
export const fetchUser = (id) => API.get(`/users/${id}`);
export const updateUser = (id, userData) => API.put(`/users/${id}`, userData);

export default API;
