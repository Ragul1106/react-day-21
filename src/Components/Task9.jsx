import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../redux/username/usernameActions';
import { selectUsername } from '../redux/username/usernameSelectors';

const Task9 = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername(inputValue));
    setInputValue('');
  };

  const cardStyle = {
    background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-60 bg-light">
      <div style={cardStyle} className="text-center">
        <h2 className="text-primary fw-bold mb-4">Task 9: Store Username</h2>

        <form onSubmit={handleSubmit} className="mb-3 d-flex justify-content-center gap-2">
          <input
            type="text"
            placeholder="Enter username"
            className="form-control w-75"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button className="btn btn-success" type="submit">
            💾 Save
          </button>
        </form>

        <h5 className="mt-3">
          <span className="text-muted">Stored Username:</span>{' '}
          <span className={`fw-bold ${username ? 'text-success' : 'text-danger'}`}>
            {username || 'None'}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Task9;
