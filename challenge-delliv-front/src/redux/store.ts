import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './SigninSlice';
import { orderReducer } from './OrderSlice';
 

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    order: orderReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;