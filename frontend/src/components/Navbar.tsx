// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Recarga Estações</h1>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Início
          </Link>
        </li>
        <li>
          <Link to="/add" style={styles.link}>
            Adicionar Estação
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Navbar;
