import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddStationPage from './pages/AddStationPage';
import EditStationPage from './pages/EditStationPage';
import LoginPage from './pages/LoginPage'; // Importando a nova página de login
import { setAuthToken } from './services/api';
import './App.css';

const token = localStorage.getItem('authToken');
if (token) {
  setAuthToken(token);
}

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/add"
          element={isAuthenticated ? <AddStationPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit/:id"
          element={isAuthenticated ? <EditStationPage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} /> {/* Adicionando rota para login */}
      </Routes>
    </Router>
  );
};

export default App;
