import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2>Counter: {count}</h2>
      <button className="btn btn-primary mx-2" onClick={() => dispatch(increment())}>+</button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
