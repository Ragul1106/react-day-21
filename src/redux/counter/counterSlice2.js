import { createSlice } from '@reduxjs/toolkit';

const counterSlice2 = createSlice({
  name: 'counter2',
  initialState: { value: 0 },
  reducers: {
    increment2: (state) => { state.value += 1; },
    decrement2: (state) => { state.value -= 1; },
  },
});

export const { increment2, decrement2 } = counterSlice2.actions;
export default counterSlice2.reducer;
