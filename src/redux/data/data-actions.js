import { createAction } from "@reduxjs/toolkit";

export const addDataProducts = createAction("data/addProducts");
export const changeDataProducts = createAction("data/changeProducts");

export const filterByCategories = createAction("data/filterByCategories");

export const filterProductsByColor = createAction("data/filterProductsByColor");
export const filterProductsBySize = createAction("data/filterProductsBySize");

export const sortProducts = createAction("data/sortProducts");

export const addDataCategories = createAction("data/addCategories");

export const addDataSliderItems = createAction("data/addSliderItems");

export const setSearchValue = createAction("data/setSearchValue");

export const toggleModalDesc = createAction("cart/ToggleModalDesc");

