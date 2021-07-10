import { configureStore } from '@reduxjs/toolkit';

import loginSlice from './login-slice';
import stockServiceSlice from './stockservice-slice';


const store = configureStore({
  reducer: { login: loginSlice.reducer,stockService:stockServiceSlice.reducer },
});

export default store;