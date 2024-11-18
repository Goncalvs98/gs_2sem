// src/components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div style={loaderStyles.container}>
      <div style={loaderStyles.spinner}></div>
      <p>Carregando...</p>
    </div>
  );
};

const loaderStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column', // Declara explicitamente o valor válido
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #ccc',
    borderTop: '5px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  } as React.CSSProperties, // Define explicitamente a tipagem como CSS válido
};

export default Loader;
