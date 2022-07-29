import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addDataProducts,
  changeDataProducts,
  filterByCategories,
  filterProductsByColor,
  filterProductsBySize,
  sortProducts,
  addDataCategories,
  addDataSliderItems,
  setSearchValue,
  toggleModalDesc,
} from "./data-actions";

const dataProductsReducer = createReducer([], {
  [addDataProducts]: (_, action) => action.payload,
  [changeDataProducts]: (state, action) => {
    Object.assign(
      state.find((product) => product.id === action.payload.id),
      action.payload
    );
  },
});

const categoryReducer = createReducer("", {
  [filterByCategories]: (_, action) => action.payload
});

const filterColorReducer = createReducer("color", {
  [filterProductsByColor]: (_, action) => action.payload,
});

const filterSizeReducer = createReducer("size", {
  [filterProductsBySize]: (_, action) => action.payload,
});

const sortReducer = createReducer("newest", {
  [sortProducts]: (_, action) => action.payload,
});

const dataCategoriesReducer = createReducer([], {
  [addDataCategories]: (_, action) => action.payload,
});

const dataSliderItemsReducer = createReducer([], {
  [addDataSliderItems]: (_, action) => action.payload,
});

const searchReducer = createReducer("", {
  [setSearchValue]: (_, action) => action.payload,
});

const showModalDescReducer = createReducer(false, {
  [toggleModalDesc]: (_, action) => action.payload,
});

export default combineReducers({
  products: dataProductsReducer,
  categories: dataCategoriesReducer,
  sliderItems: dataSliderItemsReducer,
  singleCategory: categoryReducer,
  colorFilter: filterColorReducer,
  sizeFilter: filterSizeReducer,
  sort: sortReducer,
  searchValue: searchReducer,
  modalDesc: showModalDescReducer,
});
