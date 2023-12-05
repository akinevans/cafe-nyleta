import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  // itemQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const maxQuantity = 5;

      //check if item exists in state array
      if (item) {
        // mutate from waitlistModal / addToCart component
        if (action.payload.itemQuantity) {
          if (item.itemQuantity + action.payload.itemQuantity > maxQuantity) {
            item.itemQuantity = maxQuantity;
            //TODO: build custom alert modal
            alert("Limit 5 per customer");
          } else {
            item.itemQuantity += action.payload.itemQuantity;
          }
        }

        // mutate from shoppingCartItem
        if (action.payload.newQuantity) {
          item.itemQuantity = action.payload.newQuantity;
        }
      } else {
        // add item to state products array
        state.products.push(action.payload);
      }

      state.value += 1;
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetCart: (state, action) => {
      //empty the state products array
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
