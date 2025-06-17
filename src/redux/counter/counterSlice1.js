import { createSlice } from '@reduxjs/toolkit';

const counterSlice1 = createSlice({
  name: 'counter1',
  initialState: { value: 0 },
  reducers: {
    increment1: (state) => { state.value += 1; },
    decrement1: (state) => { state.value -= 1; },
  },
});

export const { increment1, decrement1 } = counterSlice1.actions;
export default counterSlice1.reducer;
