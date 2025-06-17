import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

const Proj2 = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light';
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  }, [theme]);

  const styles = {
    wrapper: {
      height: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.5s ease, color 0.5s ease',
    },
    card: {
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: theme === 'light' ? '#ffffff' : '#1c1c1c',
      color: theme === 'light' ? '#000' : '#fff',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    button: {
      fontSize: '1.2rem',
      padding: '10px 25px',
      marginTop: '20px',
      transition: 'transform 0.2s',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 className="mb-3">MiniProject 2: Toggle Theme App</h2>
        <p className="mb-4">
          Current Theme: <strong>{theme}</strong>
        </p>
        <button
          className="btn btn-outline-primary"
          style={styles.button}
          onClick={() => dispatch(toggleTheme())}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Proj2;
