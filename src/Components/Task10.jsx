import React from 'react';
import { useSelector } from 'react-redux';

const Task10 = () => {
  const history = useSelector((state) => state.counter.history);

  return (
    <div className="d-flex justify-content-center">
      <div className="container text-center">
        <h2>Task 10: Counter History</h2>
        <p>Last 5 values (most recent first):</p>
        <ul className="list-group">
          {history.length === 0 ? (
            <li className="list-group-item">No history yet.</li>
          ) : (
            history.map((val, index) => (
              <li key={index} className="list-group-item">
                #{index + 1}: {val}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Task10;
