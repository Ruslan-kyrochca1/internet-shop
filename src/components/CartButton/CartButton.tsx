import React from 'react';
import styles from'./CartButton.module.scss';

type Props = {
  isInCart: boolean;
  onClick: () => void;
};

export const CartButton = ({ isInCart, onClick }: Props) => {
  return (
    <button
      className={`${styles.cartButton} ${isInCart ? styles.cartButtonRed :''}`}
      onClick={onClick}
    >
      {isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
    </button>
  );
};