import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleLogin } = loginSlice.actions;
export default loginSlice.reducer;
