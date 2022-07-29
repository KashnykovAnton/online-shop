import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { incrementCounter, decrementCounter, productCount } from "./counter-actions";

const counterReducer = createReducer(0, {
  [incrementCounter]: (state, action) => state + action.payload,
  [decrementCounter]: (state, action) => {
    return state > 0 ? state - action.payload : 0;
  },
});

// const counterReducer = createReducer({value: 0}, {
//   [incrementCounter]: (state, action) => state + action.payload,
//   [decrementCounter]: (state, action) => {
//     return state > 0 ? state - action.payload : 0;
//   },
// });

// const productReducer = createReducer([], {
//   [productCount]: (state, action) =>
//     [...state, action.payload]

// });

export default combineReducers({
  value: counterReducer,
});
