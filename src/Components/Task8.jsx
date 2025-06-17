import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeActions'; // updated
import { selectTheme } from '../redux/theme/themeSelectors'; // updated

const Task8 = () => {
  const theme = useSelector(selectTheme); // updated
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light';
  }, [theme]);

  return (
    <div className="container mt-5 text-center">
      <h2>Task 8: Create a Theme Slice</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button className="btn btn-primary" onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Task8;
