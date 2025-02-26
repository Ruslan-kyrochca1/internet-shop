import { RootState } from '../../store/store'
import React from 'react'
import { useSelector } from 'react-redux'


const Cart : React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart.items)
    console.log(cart)
  return (
    <div>
      Hello
    </div>
  )
}

export default Cart
