import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    items: []
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.cart.items.findIndex((i) => i.id === item.id);

      
      console.log('existingItemIndex:', existingItemIndex);

      
      if (existingItemIndex !== -1) {
        // if item is already in the cart, increase its quantity
        state.cart.items[existingItemIndex].quantity++;
      } else {
        // if item is not in the cart, add it with a quantity of 1
        state.cart.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cart.items.findIndex((i) => i.id === itemId);

      if (itemIndex !== -1) {
        // remove the item from the cart
        state.cart.items.splice(itemIndex, 1);
      }
    },
    incrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.items.find((i) => i.id === itemId);

      if (item) {
        // increment the quantity of the specified item in the cart
        item.quantity++;
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.items.find((i) => i.id === itemId);

      if (item && item.quantity > 1) {
        // decrement the quantity of the specified item in the cart, but not below 1
        item.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
