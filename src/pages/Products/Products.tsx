import React, { useEffect, useState } from 'react'
import Product from "../../components/Product/Product"
import styles from "./Products.module.scss"
import { addProducts } from '../../api/addProducts'
import { ProductType } from '../../types/types'

const Products: React.FC = () => {
  const [prodects, setProducts] = useState<ProductType[]>([]);
  useEffect(()=>{
    const  fetchProducts = async () => {
      try{
        const data = await addProducts();
        setProducts(data)
      } catch(e){
        console.error("Error: ",e)
      }
    }
    fetchProducts();
  },[])
  if(prodects.length === 0) return(<div>Загрузка товаров...</div>)
  return (
    <main className={styles.main}>
      <section className={styles.productList}>
        {prodects.map((item)=>{
          return <Product 
                          key = {item.id}
                          id = {item.id}
                          title = {item.title}
                          description={item.description} 
                          price ={item.price}
                          images={item.images}
                  />
        })}
      </section>
    </main>
  )
}

export default Products
