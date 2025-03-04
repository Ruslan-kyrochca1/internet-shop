import { RootState, AppDispatch } from '../../store/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const Cart : React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
  

  return (
    <div>
      руддщ
    </div>
  )
}

export default Cart
