import React from 'react'
import styles from "./Product.module.scss"
import sneaksImg from "../../assets/img/sneaks.jpg"

const Product: React.FC = () => {
  return (
    <div className={styles.productCard}>
        <img src= {sneaksImg} alt="productExample" className={styles.productImg}/>
        <h3 className={styles.productTitle}>Кросовки с определенной маркой и доп информацией</h3>
        <p className={styles.productPrice}>2000 Р</p>
    </div>
  )
}
export default Product
