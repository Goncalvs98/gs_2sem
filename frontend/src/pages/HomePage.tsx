// frontend/src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { fetchStations, deleteStation } from '../services/api';
import { Station } from '../types/Station';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [stations, setStations] = useState<Station[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const loadStations = async () => {
            try {
                const data = await fetchStations();
                setStations(data);
              } catch (err) {
                console.error('Erro ao carregar estações:', err);
              } finally {
                setLoading(false);
              }
        };
        loadStations();
    }, []);

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir esta estação?');
        if (!confirmDelete) {
            return; // Se o usuário cancelar, a função termina aqui
        }
    
        try {
            await deleteStation(id); // Chama a API para excluir o registro
            setStations(stations.filter((station) => station.id !== id)); // Atualiza a lista de estações
            alert('Estação excluída com sucesso!'); // Exibe mensagem de sucesso
        } catch (error) {
            console.error('Erro ao excluir estação:', error);
            alert('Erro ao excluir a estação. Tente novamente.'); // Mensagem de erro
        }
    };
    

    if (loading) {
        return <p>Carregando estações...</p>;
    }

    if (!Array.isArray(stations)) {
        return <p>Erro: Dados das estações inválidos</p>;
    }

    return (
        <div>
            <h1>Estações de Recarga</h1>
            <button onClick={() => navigate('/add')}>Adicionar Estação</button>
            <table
                style={{
                    border: '1px solid black',
                    width: '100%',
                    marginTop: '20px',
                    textAlign: 'left',
                    borderCollapse: 'collapse',
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Localização</th>
                        <th>Capacidade</th>
                        <th>Disponível</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {stations.map((station) => (
                        <tr key={station.id}>
                            <td>{station.id}</td>
                            <td>{station.location}</td>
                            <td>{station.capacity}</td>
                            <td>{station.available}</td>
                            <td>{station.status}</td>
                            <td>
                                <button onClick={() => navigate(`/edit/${station.id}`)}>Editar</button>
                                <button onClick={() => handleDelete(station.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
