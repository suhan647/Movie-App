import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: false,
  }

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      isLoggedIn: (state, action) => {
        state.user = action.payload;
      },
    },
  });
  
  export const { isLoggedIn } = authSlice.actions;
  export const reducer = authSlice.reducer; // export the reducer
  