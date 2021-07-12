import { createSlice } from '@reduxjs/toolkit';



const stockServiceSlice = createSlice({
    name: 'stockService',
    initialState: { ticks: {},watchLists:{} },
    reducers: {
      getTopTenTicks(state,action) {
        state.ticks = action.payload.ticks;
      
      },
      getTopWatchLists(state,action){
        state.watchLists=action.payload.watchLists;
      }
   
    },
  });
  
  export const stockServiceActions = stockServiceSlice.actions;
  
  export default stockServiceSlice;