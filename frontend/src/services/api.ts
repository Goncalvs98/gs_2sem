// src/services/api.ts
import axios from 'axios';
import { Station } from '../types/Station';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/stations', // Ajuste para o URL do backend
});

// Lista todas as estações
export const fetchStations = async (): Promise<Station[]> => {
  const response = await api.get('/');
  return response.data;
};

// Adiciona uma nova estação
export const addStation = async (station: Omit<Station, 'id'>): Promise<Station> => {
  const response = await api.post('/', station);
  return response.data;
};

// Atualiza uma estação
export const updateStation = async (id: string, station: Partial<Station>): Promise<Station> => {
  const response = await api.put(`/${id}`, station);
  return response.data;
};

// Deleta uma estação
export const deleteStation = async (id: string): Promise<void> => {
  await api.delete(`/${id}`);
};
