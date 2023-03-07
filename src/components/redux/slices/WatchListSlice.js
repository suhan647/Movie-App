import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  watchListMovies: [],
}

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.watchListMovies.push(action.payload);
    },
    
    removeFromWatchList: (state, action) => {
      const index = state.watchListMovies.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state.watchListMovies.splice(index, 1);
      }
      if (index === action.payload) {
        state.watchListMovies.splice(index, 1);
      }
    },
  },
});


export const { addToWatchList , removeFromWatchList} = watchListSlice.actions;
export default watchListSlice.reducer;

