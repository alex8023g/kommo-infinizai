import React from 'react';
import styles from './shoppingcart.module.css';
import { ReactComponent as ShoppingCartIcon } from '../../img/shopping-cart.svg';

export function ShoppingCart() {
  return (
    <div className={styles.container}>
      <ShoppingCartIcon />
      <div className={styles.amount}>0</div>
    </div>
  );
}
