import { configureStore } from '@reduxjs/toolkit';
import contentSlice from './contentSlice';

const store = configureStore({
  reducer: {
    content: contentSlice.reducer
  },
});

export default store;
