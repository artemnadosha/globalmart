import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeProduct } from "../../../types/TypeProduct";

interface favoriteState {
  favorite: TypeProduct[];
  quantityFavorite: number;
}

const initialState: favoriteState = {
  favorite: [],
  quantityFavorite: 0,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItemFavorite: (state, action: PayloadAction<TypeProduct>) => {
      state.favorite = [...state.favorite, action.payload];
      state.quantityFavorite = state.favorite.length;
    },
    removeItemFavorite: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
      state.quantityFavorite = state.favorite.length;
    },
  },
});

export const { addItemFavorite, removeItemFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
