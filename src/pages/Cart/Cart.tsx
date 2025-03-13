import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import Product from '../../components/Product/Product';
import styles from "./Cart.module.scss"


const Cart : React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);

  return (
    <section className={styles.cartContainer}>
      {items.map(item=>{
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
  )
}

export default Cart
