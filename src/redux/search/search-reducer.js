import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { setSearchValue } from "./search-actions";

const searchReducer = createReducer("", {
  [setSearchValue]: (_, action) => action.payload,
});

export default combineReducers({
  searchValue: searchReducer,
});
