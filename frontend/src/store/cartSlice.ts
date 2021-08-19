import { createSlice } from '@reduxjs/toolkit'

import { CartProps } from '../@types/CartTypes'

const initialState: CartProps = {
  games: [],
  totalPrice: 0,
  length: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    isLogOut(state) {
      state.games = []
    },
    addItemToCart(state, action) {
      const newGame = action.payload
      state.games.push(newGame)
      state.totalPrice = state.totalPrice + newGame.price
    },
  },
})

const CartActions = cartSlice.actions

export { cartSlice, CartActions }
