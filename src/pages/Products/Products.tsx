import React from 'react'
import Product from "../../components/Product/Product"
import styles from "./Products.module.scss"

const Products: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.productList}>
        <Product key="1"/>
        <Product key="2"/>
        <Product key="3"/>
        <Product key="4"/>
        <Product key="5"/>
      </section>
    </main>
  )
}

export default Products
