import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataReducer from "./data/data-reducer";
import cartReducer from "./cart/cart-reducer";
import productReducer from "./product/product-reducer";

const myMiddleware = (store) => (next) => (action) => {
  console.log("My middleware!");
  next(action);
};
const basicMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(myMiddleware);

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: basicMiddleware,
});

export const persistor = persistStore(store);
