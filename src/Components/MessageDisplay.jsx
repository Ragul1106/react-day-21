import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMessage } from '../redux/actions/messageActions';

const MessageDisplay = () => {
  const message = useSelector(state => state.message?.message);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleUpdate = () => {
    dispatch(updateMessage(input));
    setInput('');
  };

  return (
    <div className="text-center mt-3">
      <h4>Message: {message}</h4>
      <input
        className="form-control w-50 mx-auto"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Update global message"
      />
      <button className="btn btn-info mt-2" onClick={handleUpdate}>
        Update Message
      </button>
    </div>
  );
};

export default MessageDisplay;
