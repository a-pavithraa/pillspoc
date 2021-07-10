import { configureStore } from '@reduxjs/toolkit';


import stockServiceSlice from './stockservice-slice';


const store = configureStore({
  reducer: { stockService:stockServiceSlice.reducer },
});

export default store;