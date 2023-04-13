import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  cartSlice,
  categoriesSlice,
  favoriteSlice,
  modalSlice,
  productSlice,
} from "./slice";

const rootReducer = combineReducers({
  cart: cartSlice,
  favorite: favoriteSlice,
  modal: modalSlice,
  product: productSlice,
  productCategories: categoriesSlice,
});
export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
