import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/Add");
export const delFromCart = createAction("cart/Delete");
export const changeInCart = createAction("cart/Change");
export const changeCartIcon = createAction('cart/ChangeIcon')
export const toggleModal = createAction("cart/ToggleModal");


