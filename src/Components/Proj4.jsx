import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../redux/login/loginSlice';

const Proj4 = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-3 p-4 bg-light rounded shadow mb-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-primary">MiniProject 4: Login Status Toggle</h2>

      <p className={`fs-4 fw-bold ${isLoggedIn ? 'text-success' : 'text-danger'}`}>
        {isLoggedIn ? '✅ Welcome, User!' : '🔒 Please log in'}
      </p>

      <button
        className={`btn ${isLoggedIn ? 'btn-danger' : 'btn-success'} px-4 `}
        onClick={() => dispatch(toggleLogin())}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Proj4;
