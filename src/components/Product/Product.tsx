import React, { useState } from 'react'
import styles from "./Product.module.scss"
import notFoundImg from "../../assets/img/notFound.jpeg"
import { ProductType } from '../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../store/slices/cartSlice'
import { RootState } from '../../store/store'

const Product: React.FC<ProductType> = ( {id, title, description, price, images}) => {
  const dispatch = useDispatch()
  const [imgSrc, setImgSrc] = useState(images && images.length > 0 ? images[0] : notFoundImg)

  const cartItem = useSelector((state: RootState) => state.cart.items)
  const isInCase = cartItem.some((item) => item.id === id);

  const classButton = `${styles.cartButton} ${isInCase ? styles.cartButtonRed :''}`

  const handleCart = () => {
    if(isInCase){
      dispatch(removeItem(id))
    } else {
      dispatch(addItem({id, title, description, price, images}))
    }
  }

  const changeImg = () => {
    //Если картинка не загрузилась(по причине ее некорректности)
    setImgSrc(notFoundImg);
  }
  return (
    <div className={styles.productCard}>
        <img 
          src={imgSrc} 
          alt="productExample" 
          className={styles.productImg}
          onError = {changeImg}
        />
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productPrice}>{price + " $"}</p>
        <button 
          className={classButton}
          onClick = {()=>{ handleCart() }}
        >{isInCase? "Удалить из корзины" : "Добавить в корзину"}</button>
    </div>
  )
}
export default Product
