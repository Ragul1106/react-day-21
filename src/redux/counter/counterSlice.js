import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  history: [],
};

function updateHistory(state) {
  state.history.unshift(state.value); 
  if (state.history.length > 5) state.history.pop(); 
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      updateHistory(state);
      state.value += 1;
    },
    decrement: (state) => {
      updateHistory(state);
      state.value -= 1;
    },
    reset: (state) => {
      updateHistory(state);
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      updateHistory(state);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
