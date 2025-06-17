import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions/authActions';

const AuthStatus = () => {
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-3">
      <h3>{isAuthenticated ? 'Logged In' : 'Logged Out'}</h3>
      <button
        className="btn btn-success me-2"
        onClick={() => dispatch(login())}
        disabled={isAuthenticated}
      >
        Login
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch(logout())}
        disabled={!isAuthenticated}
      >
        Logout
      </button>
    </div>
  );
};

export default AuthStatus;
