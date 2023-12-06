import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // search for item in state cart array, find by id
      let item = state.products.find((item) => item.id === action.payload.id);
      // now that we have the product id, filter by size
      item = state.products.find((item) => item.size === action.payload.size);
      const maxQuantity = 5;

      //TODO: iterate over state, calculate item totals for each product by size, if total > maxQuantity throw error

      //* check if item exists in state array and check if this item exists in array in its current payload size  */
      if (item) {
        if (
          state.products.includes(item) &&
          action.payload.size === item.size
        ) {
          //!check if this item, in the payload size is already in the cart
          if (action.payload.itemQuantity) {
            // mutate from waitlistModal / addToCart component
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
          alert("failed second check");

          //! dont immediately push item into state,
          // add item to state products array
          state.products.push(action.payload);
        }
      } else {
        alert("failed first check");
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
