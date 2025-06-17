import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counter/counterSlice';

const Proj1 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const styles = {
    wrapper: {
      height: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      padding: '40px',
      borderRadius: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    count: {
      fontSize: '5rem',
      fontWeight: 'bold',
      color: 'red',
      marginBottom: '20px',
      transition: 'transform 0.3s ease',
    },
    button: {
      fontSize: '1.2rem',
      padding: '10px 25px',
      margin: '0 10px',
      transition: 'transform 0.2s',
    },
  };

  const handleClick = (type) => {
    if (type === 'inc') dispatch(increment());
    else dispatch(decrement());
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 className="mb-4 text-primary">Mini Project1: Counter App</h2>
        <div style={styles.count}>{count}</div>
        <div>
          <button
            className="btn btn-outline-danger"
            style={styles.button}
            onClick={() => handleClick('dec')}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            - Decrement
          </button>
          <button
            className="btn btn-outline-success"
            style={styles.button}
            onClick={() => handleClick('inc')}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proj1;
