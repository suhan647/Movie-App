import { configureStore } from '@reduxjs/toolkit';
import { reducer as authenticationReducer } from './slices/LoginSlice';
import { watchListSlice } from './slices/WatchListSlice';


export const store = configureStore({
  reducer: {
    authentication: authenticationReducer, // use the reducer
    watchList: watchListSlice.reducer, // add ".reducer" here
  
  },
});
