import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api' });

export const fetchTasks = () => API.get('/tasks');
export const createTask = (payload) => API.post('/tasks', payload);
export const toggleTask = (id) => API.patch(`/tasks/${id}/toggle`);
