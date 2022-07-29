import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addToCart, delFromCart, changeInCart, changeCartIcon, toggleModal } from "./cart-actions";

const cartReducer = createReducer([], {
  [addToCart]: (state, action) => {
    // -- try to compare two products before add to cart, but they have different id --
    // if (
    //   state.find(
    //     (product) => Object.values(product).sort().toString() === Object.values(action.payload).sort().toString()
    //   )
    // ) {
    //   return;
    // }
    return [...state, action.payload];
  },
  [delFromCart]: (state, action) => state.filter((product) => product.id !== action.payload),
  [changeInCart]: (state, action) => {
    Object.assign(
      state.find((product) => product.id === action.payload.id),
      action.payload
    );
  },
});

const cartIconReducer = createReducer(0, {
  [changeCartIcon]: (state, action) => state + action.payload,
});

const showModalReducer = createReducer(false, {
  [toggleModal]: (_, action) => action.payload,
});

export default combineReducers({
  cartProducts: cartReducer,
  cartIcon: cartIconReducer,
  modal: showModalReducer,
});
