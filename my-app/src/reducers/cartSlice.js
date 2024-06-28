import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    itemsAdded: (state, action) => {
      const addedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (addedItem) {
        addedItem.quantity += 1;
        addedItem.subtotal = addedItem.quantity * addedItem.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          subtotal: action.payload.price,
        });
      }
    },
    itemDelete: (state, action) => {
      const index = state.items.findIndex((x) => x.id === action.payload);
      if (index !== -1) state.items.splice(index, 1);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.subtotal = item.quantity * item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.subtotal = item.quantity * item.price;
      }
    },
  },
});

export const { itemsAdded, itemDelete, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;

// Selector to calculate total price
export const selectTotalPrice = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((total, item) => total + item.subtotal, 0)
);

export default cartSlice.reducer;
