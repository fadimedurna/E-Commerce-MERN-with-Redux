import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    cartQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartQuantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      state.cartQuantity -= 1;
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state.cartQuantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
