import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
  quantity: 0,
  totalAmount: 0,
};

export const cart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    calculateAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    pushArray: (state, action) => {
      state.cartArray.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const indexToRemove = action.payload; // Assuming this is the index
      state.cartArray = state.cartArray.filter(
        (_, index) => index !== indexToRemove
      );
    },
    deleteCart: (state) => {
      state.cartArray = [];
    },
  },
});

export const {
  pushArray,
  calculateQuantity,
  calculateAmount,
  updateCart,
  removeCartItem,
  deleteCart,
} = cart.actions;
export default cart.reducer;
