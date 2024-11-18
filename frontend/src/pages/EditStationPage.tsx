import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchStationById, updateStation } from '../services/api';
import { Station } from '../types/Station';

const EditStationPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Partial<Station>>({
        location: '',
        capacity: 0,
        available: 0,
        status: 'active',
    });
    
    useEffect(() => {
        const loadStation = async () => {
            try {
                const station = await fetchStationById(id!); // Busca pelo ID
                setFormData(station);
            } catch (error) {
                console.error('Erro ao carregar estação:', error);
                navigate('/'); // Redireciona em caso de erro
            }
        };

        if (id) loadStation();
    }, [id, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateStation(id!, formData);
            navigate('/');
        } catch (error) {
            console.error('Erro ao atualizar estação:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Editar Estação</h1>
            <input
                name="location"
                placeholder="Localização"
                value={formData.location}
                onChange={handleChange}
                required
            />
            <input
                name="capacity"
                type="number"
                placeholder="Capacidade"
                value={formData.capacity}
                onChange={handleChange}
                required
            />
            <input
                name="available"
                type="number"
                placeholder="Disponível"
                value={formData.available}
                onChange={handleChange}
                required
            />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
            </select>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default EditStationPage;
