import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../../cartItems';
import Product from '../../Product';

const initialState = {
  cartItems,
  totalProduct: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    incresaseItem: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount += 1;
    },
    decreaseItem: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount -= 1;
      if (cartItem.amount < 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }
    },
    caculateTotal: (state) => {
      const totalResult = state.cartItems.reduce(
        (acc, curr) => {
          acc.totalProduct += curr.amount;
          acc.subTotal += curr.amount * curr.price;

          return acc;
        },
        { totalProduct: 0, subTotal: 0 }
      );
      // state.totalProduct = totalProduct;
      // state.subTotal = subTotal;
      state.totalProduct = totalResult.totalProduct;
      state.subTotal = totalResult.subTotal;
    },
  },
});
export const { removeItem, incresaseItem, decreaseItem, caculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
