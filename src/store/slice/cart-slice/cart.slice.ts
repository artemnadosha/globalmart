import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeProduct } from "../../../types/TypeProduct";

interface cartState {
  cart: TypeProduct[];
  quantityCart: number;
}

const initialState: cartState = {
  cart: [],
  quantityCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<TypeProduct>) => {
      state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      state.quantityCart = state.cart.length;
    },
    removeItemCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeAllItemCart: (state) => {
      state.cart = [];
      state.quantityCart = 0;
    },
    changeQuantityItemProduct: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
    },
  },
});

export const {
  addItemCart,
  removeItemCart,
  removeAllItemCart,
  changeQuantityItemProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
