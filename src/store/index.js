import {
  configureStore,
  combineReducers
  
} from '@reduxjs/toolkit';


import stockServiceSlice from './stockservice-slice';

const combinedReducer = combineReducers({
  stockService: stockServiceSlice.reducer
});

const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};
const store = configureStore({
  reducer: rootReducer
 
});

/*const store = configureStore({
  reducer: { stockService:stockServiceSlice.reducer },
});*/

export default store;