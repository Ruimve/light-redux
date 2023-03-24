import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './redux';

export const store = configureStore({
  reducer: {
    demoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;