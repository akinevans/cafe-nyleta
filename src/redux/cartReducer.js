import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const maxQuantity = 5;

      //update the quantity of the product in the cart
      if (item) {
        // check if there are more than 5 of the product in cart
        if (item.itemQuantity + action.payload.itemQuantity > maxQuantity) {
          item.itemQuantity = maxQuantity;
          alert("Limit 5 per customer");
        } else {
          item.itemQuantity += action.payload.itemQuantity;
        }
      } else {
        state.products.push(action.payload);
      }

      state.value += 1;
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      //empty the state products array
      state.products = [];
    },
    updateItemQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.itemQuantity = action.payload.itemQuantity;
      }
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
