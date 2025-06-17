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

  return (
    <div className="d-flex justify-content-center">
      <div className="container text-center">
        <h2>Task 9: Store Username</h2>

        <form onSubmit={handleSubmit} className="mb-3 d-flex justify-content-center gap-2">
          <input
            type="text"
            placeholder="Enter username"
            className="form-control w-auto"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit">Save</button>
        </form>

        <h5>
          Stored Username: <span className="text-success">{username || 'None'}</span>
        </h5>
      </div>
    </div>
  );
};

export default Task9;
