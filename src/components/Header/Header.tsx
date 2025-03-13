import React from 'react'
import styles from "./Header.module.scss"
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import cartImg from "../../assets/icons/shopping-basket.svg"

const Header: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items)
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>SneakMax</a>
      <section className={styles.menu}>
        <Link className= "menu-item" to="/">Каталог</Link>
        <a className= "menu-item" href="#">О нас</a>
        <a className= "menu-item" href="#">Подбор товара</a>
        <a className= "menu-item" href="#">Контакты</a>
      </section>
      <NavLink to="/cart" className={styles.cart}>
        Корзина
        <div className= {styles.cartCount}>
          <img src={cartImg} alt="counter" className={styles.cartImg} />
          <div className={styles.cartNum}>{items.length}</div>
        </div>
      </NavLink>
    </header>
  )
}

export default Header
