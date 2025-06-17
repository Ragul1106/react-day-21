import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../redux/todos/todoSlice';

const Proj3 = () => {
  const [input, setInput] = useState('');
  const [fadeOutId, setFadeOutId] = useState(null);
  const [hovered, setHovered] = useState(false);
  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  const handleRemove = (id) => {
    setFadeOutId(id);
    setTimeout(() => {
      dispatch(removeTodo(id));
      setFadeOutId(null);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  const styles = {
    wrapper: {
      height: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(120deg, #fdf1ec, #f3e8ff)',
      padding: '1rem',
    },
    card: {
      padding: '40px',
      borderRadius: '15px',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '600px',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '25px',
    },
    input: {
      flex: 1,
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ced4da',
      backgroundColor: '#fff9f5',
      color: '#6c3483',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1.1rem',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: hovered ? '#f39c12' : '#6c5ce7',
      color: '#fff',
      transition: 'all 0.3s ease',
      transform: hovered ? 'scale(1.05)' : 'scale(1)',
    },
    todoItem: {
      transition: 'all 0.3s ease',
      animation: 'slideIn 0.3s ease forwards',
    },
    fadeOut: {
      opacity: 0,
      transform: 'translateX(100px)',
    },
    listGroup: {
      maxHeight: '300px',
      overflowY: 'auto',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 className="text-center mb-4 text-primary">MiniProject 3: Todo App</h2>

        <div style={styles.inputGroup}>
          <input
            type="text"
            style={styles.input}
            className="form-control"
            placeholder="Enter a list"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button
            className="btn"
            style={styles.button}
            onClick={handleAdd}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            ➕ Add
          </button>
        </div>

        <ul className="list-group" style={styles.listGroup}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{
                ...styles.todoItem,
                ...(fadeOutId === todo.id ? styles.fadeOut : {}),
                backgroundColor: '#f9fbe7',
                color: '#4a235a',
              }}
            >
              {todo.text}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleRemove(todo.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Proj3;
