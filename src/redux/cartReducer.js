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
      const maxQuantity = 5;

      if (item) {
        if (state.products.includes(item)) {
          //!loop until a match is found, if no match at end of array, push to cart
          for (let i = 0; i < state.products.length; i++) {
            let isIdMatch = state.products[i].id === action.payload.id;
            let isSizeMatch = state.products[i].size === action.payload.size;

            if (isIdMatch && isSizeMatch) {
              console.log("Match found " + isIdMatch + " " + isSizeMatch);
              if (action.payload.itemQuantity) {
                // mutate from waitlistModal aka addToCart component
                if (
                  state.products[i].itemQuantity + action.payload.itemQuantity >
                  maxQuantity
                ) {
                  alert("Limit 5 per customer");

                  state.products[i].itemQuantity = maxQuantity;
                  //TODO: build custom alert modal
                } else {
                  state.products[i].itemQuantity += action.payload.itemQuantity;
                }
              }

              // mutate from shoppingCartItem
              if (action.payload.newQuantity) {
                state.products[i].itemQuantity = action.payload.newQuantity;
              }
            } else {
              // are we at the end of the state array?
              //if yes, that means no match was found, push item into array
              if (i === state.products.length - 1) {
                console.log("NO match found " + isIdMatch + " " + isSizeMatch);
                alert("failed third check, no matches found");
                //! dont immediately push item into state,
                state.products.push(action.payload);
              } else {
                //continue looping
                continue;
              }
            }
          } // end  loop
        } else {
          alert("failed second check");
          //! dont immediately push item into state,

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
