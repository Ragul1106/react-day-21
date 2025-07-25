const initialState = { message: 'Welcome to Redux App!' };

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE': return {...state, message: action.payload};
    default: return state;
  }
};

export default messageReducer;
