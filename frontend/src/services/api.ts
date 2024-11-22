// frontend/src/services/api.ts
import axios from 'axios';
import { Station } from '../types/Station';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const login = async (username: string, password: string) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const fetchStations = async (): Promise<Station[]> => {
  const response = await api.get('/stations/');
  return response.data;
};

export const addStation = async (station: Omit<Station, 'id'>): Promise<Station> => {
  const response = await api.post('/stations/', station);
  return response.data;
};

export const updateStation = async (id: string, station: Partial<Station>): Promise<Station> => {
  const response = await api.put(`/stations/${id}`, station);
  return response.data;
};

export const deleteStation = async (id: string): Promise<void> => {
  await api.delete(`/stations/${id}`);
};

export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('authToken', token); // Salva o token
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('authToken'); // Remove o token
  }
};
