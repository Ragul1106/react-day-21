import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../redux/counter/counterActions';
import { selectCount } from '../redux/counter/counterSelectors';

const Task1and2 = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  const handleAddAmount = () => {
    const number = parseInt(amount);
    if (!isNaN(number)) {
      dispatch(incrementByAmount(number));
      setAmount('');
    } else {
      alert('Please enter a valid number');
    }
  };

  const handleIncrementIfOdd = () => {
    if (count % 2 !== 0) {
      dispatch(increment());
    } else {
      alert('Counter is not odd!');
    }
  };

  const badgeColor = count === 0
    ? 'secondary'
    : count < 5
    ? 'info'
    : count < 10
    ? 'warning'
    : 'danger';

  const cardStyle = {
    borderRadius: '20px',
    background: 'linear-gradient(to right, #f8f9fa, #e3f2fd)',
    padding: '40px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary"> Combined Tasks 1-5</h2>
        <p className="lead text-muted">
          Functional Redux Counter with Conditions and Dynamic Styling
        </p>
      </div>

      <div className="text-center" style={cardStyle}>
        <h1>
          <span className={`badge bg-${badgeColor} px-4 py-2`}>
            Count: {count}
          </span>
        </h1>

        <div className="btn-group mt-4 mb-4" role="group">
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => dispatch(decrement())}
            disabled={count <= 0}
            style={{ minWidth: '120px' }}
          >
            ➖ Decrement
          </button>

          <button
            className="btn btn-outline-success me-2"
            onClick={() => dispatch(increment())}
            disabled={count >= 10}
            style={{ minWidth: '120px' }}
          >
            ➕ Increment
          </button>

          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => dispatch(reset())}
            style={{ minWidth: '120px' }}
          >
            🔁 Reset
          </button>

          <button
            className="btn btn-outline-warning"
            onClick={handleIncrementIfOdd}
            style={{ minWidth: '180px' }}
          >
             Increment If Odd
          </button>
        </div>

        <hr />

        <div className="mt-4">
          <h4 className="text-primary mb-3">Task 3: Increment by Amount</h4>
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-4 col-sm-3 col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-primary"
                onClick={handleAddAmount}
              >
                ➕ Add Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task1and2;
