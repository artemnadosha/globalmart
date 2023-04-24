import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalState {
  isActive: boolean;
  response: boolean;
  id: number | null;
}

const initialState: modalState = {
  isActive: false,
  response: false,
  id: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleIsActive: (state, action: PayloadAction<number | null>) => {
      state.isActive = !state.isActive;
      state.id = action.payload;
    },
    responseModal: (state, action: PayloadAction<boolean>) => {
      state.response = action.payload;
    },
    resetModal: (state) => {
      state.isActive = false;
      state.response = false;
      state.id = null;
    },
  },
});

export const { toggleIsActive, responseModal, resetModal } = modalSlice.actions;

export default modalSlice.reducer;
