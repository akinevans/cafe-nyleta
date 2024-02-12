// Redux persist (in store.js) saves the state of the shopping cart so that when the page reloads the user will still have items in cart

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //addToCart can both increment and decrement item quantities
    addToCart: (state, action) => {
      const { products } = state;
      const { id, size, newQuantity, itemQuantity } = action.payload;
      const maxQuantity = 5;

      const existingProductIndex = products.findIndex(
        (item) => item.id === id && item.size === size
      );

      if (existingProductIndex !== -1) {
        // If product already exists in the cart
        if (newQuantity) {
          // Mutate from shoppingCartItem
          products[existingProductIndex].itemQuantity = newQuantity;
        } else if (itemQuantity) {
          // Mutate from itemDetail component
          const updatedQuantity =
            products[existingProductIndex].itemQuantity + itemQuantity;

          // update the itemsQuantity, maximum of 5 total per size
          products[existingProductIndex].itemQuantity = Math.min(
            updatedQuantity,
            maxQuantity
          );
        }
      } else {
        // If product doesn't exist in the cart, push it to the cart
        products.push(action.payload);
      }

      state.value += 1;
    },

    removeItem: (state, action) => {
      // Use filter to create a new array without the item that needs to be removed
      state.products = state.products.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
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
