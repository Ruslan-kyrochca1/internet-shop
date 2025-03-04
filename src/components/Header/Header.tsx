import React from 'react'
import styles from "./Header.module.scss"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>SneakMax</a>
      <section className={styles.menu}>
        <a className= "menu-item" href="#">Каталог</a>
        <a className= "menu-item" href="#">О нас</a>
        <a className= "menu-item" href="#">Подбор товара</a>
        <a className= "menu-item" href="#">Контакты</a>
      </section>
      <a href="#" className='cart'>
        Корзина
        <div className="cart-count">
          <img src="#" alt="counter" className="cart-img" />
          <div className="cart-num"></div>
        </div>
      </a>
    </header>
  )
}

export default Header
