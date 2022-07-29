import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addProduct, changeProduct, toggleModalDesc } from "./product-actions";

const productReducer = createReducer(
  {},
  {
    [addProduct]: (_, action) => action.payload,
    [changeProduct]: (state, action) => Object.assign(state, action.payload),
  }
);

const showModalDescReducer = createReducer(false, {
  [toggleModalDesc]: (_, action) => action.payload,
});

export default combineReducers({
  singleProduct: productReducer,
  modal: showModalDescReducer,
});
