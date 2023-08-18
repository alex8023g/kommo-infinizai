import React from 'react';
import styles from './header.module.css';
import { Layout } from '../Layout';
import { ReactComponent as Logo } from '../../img/logo.svg';
import cx from 'classnames';
import classNames from 'classnames/bind';

import { Button1 } from '../Button1';
import { ShoppingCart } from '../ShoppingCart';
import { nanoid } from 'nanoid';

export function Header() {
  const menuData = [
    { id: 'fff', name: 'Home', href: '#', isAcive: true },
    { id: 'fff', name: 'About', href: '#', isAcive: false },
    { id: 'fff', name: 'Team', href: '#', isAcive: false },
    { id: 'fff', name: 'Shop', href: '#', isAcive: false },
    { id: 'fff', name: 'Pages', href: '#', isAcive: false },
  ].map((item) => ({ ...item, id: nanoid() }));

  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.buff1}></div>
          <ul className={styles.menuUl}>
            {/* <li className={cx(styles.menuLi, styles.menuLi2)}>Home</li>
            <li className={cx(styles.menuLi, styles.menuLi2)}>About</li>
            <li className={cx(styles.menuLi, styles.menuLi2)}>Team</li>
            <li className={cx(styles.menuLi, styles.menuLi2)}>Shop</li>
          <li className={cx(styles.menuLi)}>Pages</li> */}
            {menuData.map((item) => (
              <li key={item.id} className={cx(styles.menuLi, styles.menuLi2)}>
                <a
                  className={cx(styles.menuA, { [styles.active]: item.isAcive })}
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.buff2}></div>
          <div className={styles.shoppingCart}>
            <ShoppingCart />
          </div>
          <Button1 />
        </div>
      </Layout>
    </header>
  );
}
