import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //! known bug, itemQuantity is off by 1 when adding to cart, steps to replicate:
    // add item to cart
    // add same item in a different size, its payload quantity will be double the selected amount
    addToCart: (state, action) => {
      // search for item in state cart array, find by id
      let item = state.products.find((item) => item.id === action.payload.id);
      const maxQuantity = 5;

      if (item) {
        if (state.products.includes(item)) {
          //loop until a match is found, if no match found by end of array, push to cart
          for (let i = 0; i < state.products.length; i++) {
            let isIdMatch = state.products[i].id === action.payload.id;
            let isSizeMatch = state.products[i].size === action.payload.size;

            if (isIdMatch && isSizeMatch) {
              console.log("Match found " + isIdMatch + " " + isSizeMatch);

              // mutate from shoppingCartItem
              if (action.payload.newQuantity) {
                state.products[i].itemQuantity = action.payload.newQuantity;
                return;
              }

              if (action.payload.itemQuantity) {
                // mutate from waitlistModal aka addToCart component
                if (
                  state.products[i].itemQuantity + action.payload.itemQuantity >
                  maxQuantity
                ) {
                  alert("Limit 5 per customer, per size");
                  state.products[i].itemQuantity = maxQuantity;
                  break;
                } else {
                  alert(
                    "itemQuantity at end of increment : " +
                      action.payload.itemQuantity
                  );
                  //! off by 1 bug is here
                  console.log(state.products[i].itemQuantity);
                  console.log(action.payload.itemQuantity);
                  state.products[i].itemQuantity += action.payload.itemQuantity;
                  break;
                }
              }
            } else {
              // check if at end of the state array
              //if true, that means no match was found, push item into array
              if (i === state.products.length - 1) {
                // console.log("NO match found " + isIdMatch + " " + isSizeMatch);
                alert("failed third check, no matches found");
                state.products.push(action.payload);
              } else {
                continue;
              }
            }
          } // end  loop
        } else {
          alert("failed second check");
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
      //loop until a match is found, then remove item from array
      for (let i = 0; i < state.products.length; i++) {
        let isIdMatch = state.products[i].id === action.payload.id;
        let isSizeMatch = state.products[i].size === action.payload.size;

        if (isIdMatch && isSizeMatch) {
          alert("found match in removeItem at index " + i);
          //remove element i from state array while mutating array
          state.products.splice(i, 1);
          break;
        } else {
          //if at end of state array stop
          if (i === state.products.length - 1) {
            break;
          } else {
            continue;
          }
        }
      } // end loop
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
