import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  ],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemIndex) {
        itemIndex.Quantity += 1;
      } else {
        const tempProduct = { ...action.payload, Quantity: 1 };

        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
