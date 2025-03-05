import React, { useState } from 'react'
import styles from "./Product.module.scss"
import notFoundImg from "../../assets/img/notFound.jpeg"
import { ProductType } from '../../types/types'

const Product: React.FC<ProductType> = ( {title, description, price, images }) => {
  const [imgSrc, setImgSrc] = useState(images && images.length > 0 ? images[0] : notFoundImg)
  if(images === undefined) console.log('Finded')
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
    </div>
  )
}
export default Product
