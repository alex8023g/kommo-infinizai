import React from 'react';
import styles from './header.module.css';
import { Layout } from '../Layout';
import { ReactComponent as Logo } from '../../img/logo.svg';
import cx from 'classnames';
import { Button1 } from '../Button1';
import { ShoppingCart } from '../ShoppingCart';

export function Header() {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.container}>
          <Logo />
          <ul className={styles.menuUl}>
            <li className={cx(styles.menuLi, styles.menuLi2)}>Home</li>
            <li className={cx(styles.menuLi, styles.menuLi2)}>About</li>
            <li className={cx(styles.menuLi, styles.menuLi2)}>Team</li>
            <li className={cx(styles.menuLi, styles.menuLi2)}>Shop</li>
            <li className={cx(styles.menuLi)}>Pages</li>
          </ul>
          <ShoppingCart />
          <Button1 />
        </div>
      </Layout>
    </header>
  );
}
