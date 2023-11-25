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

      //update the quantity of the product in the cart
      if (item) {
        // update item quantity to zero if zero is selected
        if (action.payload.itemQuantity <= 0) {
          item.itemQuantity = action.payload.itemQuantity;
          //else increment
        } else if (action.payload.itemQuantity > 0) {
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
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
