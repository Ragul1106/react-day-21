import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment1, decrement1 } from '../redux/counter/counterSlice1';
import { increment2, decrement2 } from '../redux/counter/counterSlice2';

const Task6 = () => {
  const count1 = useSelector((state) => state.counter1.value);
  const count2 = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  const cardStyle = {
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    padding: '30px',
    background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
    marginBottom: '30px',
  };

  const btnStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
  };

  const counterBox = {
    backgroundColor: '#fefae0',
    borderRadius: '10px',
    padding: '10px 20px',
    display: 'inline-block',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#bc6c25',
    marginBottom: '15px',
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h2 className="mb-4 text-center text-primary fw-bold"> Task 6: Multiple Counters</h2>

      <div style={cardStyle} className="w-100 text-center">
        <h4 className="text-secondary mb-2">Counter 1</h4>
        <div style={counterBox}>{count1}</div>
        <div className="mt-3">
          <button
            className="btn btn-outline-danger me-2"
            style={btnStyle}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => dispatch(decrement1())}
          >
            ➖ Decrement
          </button>
          <button
            className="btn btn-outline-success"
            style={btnStyle}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => dispatch(increment1())}
          >
            ➕ Increment
          </button>
        </div>
      </div>

      <div style={cardStyle} className="w-100 text-center">
        <h4 className="text-secondary mb-2">Counter 2</h4>
        <div style={counterBox}>{count2}</div>
        <div className="mt-3">
          <button
            className="btn btn-outline-warning me-2"
            style={btnStyle}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => dispatch(decrement2())}
          >
            ➖ Decrement
          </button>
          <button
            className="btn btn-outline-info"
            style={btnStyle}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => dispatch(increment2())}
          >
            ➕ Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task6;
