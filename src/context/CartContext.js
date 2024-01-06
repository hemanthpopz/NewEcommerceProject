import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  onClickIncrementBtn: () => {},
  onClickDecrementBtn: () => {},
  onChangeMainView: () => {},
})

export default CartContext
