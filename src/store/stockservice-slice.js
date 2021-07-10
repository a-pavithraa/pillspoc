import { createSlice } from '@reduxjs/toolkit';



const stockServiceSlice = createSlice({
    name: 'stockService',
    initialState: { ticks: {} },
    reducers: {
      getTopTenTicks(state,action) {
        state.ticks = action.payload.ticks;
      
      }
   
    },
  });
  
  export const stockServiceActions = stockServiceSlice.actions;
  
  export default stockServiceSlice;