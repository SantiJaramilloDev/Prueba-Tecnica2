import { configureStore } from '@reduxjs/toolkit';
import login from './loginSlice';

export const store = configureStore({
    reducer: {
      login
    }
})