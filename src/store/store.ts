import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartSlice, favoriteSlice, modalSlice } from "./slice";
import { api } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  cart: cartSlice,
  favorite: favoriteSlice,
  modal: modalSlice,
  [api.reducerPath]: api.reducer,
});
export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
