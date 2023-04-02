import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/Api/ApiSlice';
import AuthSlice from '../features/Auth/AuthSlice';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: AuthSlice
  },

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),

});
