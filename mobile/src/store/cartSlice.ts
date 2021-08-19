import { createSlice } from '@reduxjs/toolkit'

import { CartProps } from '../@types/CartTypes'

const initialState: CartProps = {
  bets: [],
  totalPrice: 0,
  length: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    isLogOut(state) {
      state.bets = []
    },
    addItemToCart(state, action) {
      const newGame = action.payload
      state.bets.push(newGame)
      state.totalPrice = state.totalPrice + newGame.price
    },
  },
})

const CartActions = cartSlice.actions

export { cartSlice, CartActions }
