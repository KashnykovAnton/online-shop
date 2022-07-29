import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addTypeOfProduct } from "./type-actions";

const typeReducer = createReducer([], {
  [addTypeOfProduct]: (state, action) => [...state, action.payload],
  
});

export default combineReducers({
  typeOfTheProduct: typeReducer,
});
