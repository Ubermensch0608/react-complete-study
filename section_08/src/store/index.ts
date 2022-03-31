import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalSliceState {
  isOpen: boolean;
  errorMessage: string;
}

const modalInitialState: ModalSliceState = {
  isOpen: false,
  errorMessage: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    errorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
