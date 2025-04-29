import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],        
  totalItems: 0,     
  totalPrice: 0,     
};

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        state.totalPrice += price;
      } else {
        state.items.push({ id, title, image, price, qty: 1 });
        state.totalItems += 1;
        state.totalPrice += price;
      }
    },
  },
  removeFromCart: (state, action) => {
    const itemId = action.payload;
    state.items = state.items.filter(item => item.id !== itemId);
    state.totalItems = state.items.length;
    state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.qty), 0);
  },
  updateQuantity: (state, action) => {
    const { id, quantity } = action.payload;
    const existingItem = state.items.find(item => item.id === id);
  
    if (existingItem) {
      existingItem.qty = quantity;
      if (existingItem.qty <= 0) {
        state.items = state.items.filter(item => item.id !== id);
      }
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.qty), 0);
      state.totalItems = state.items.length;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = ProductSlice.actions;
export default ProductSlice.reducer;
