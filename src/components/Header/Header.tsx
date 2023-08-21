import React from 'react';
import styles from './header.module.css';
import { Layout } from '../Layout';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as Menu } from '../../img/menu.svg';
import cx from 'classnames';
import classNames from 'classnames/bind';

import { Button1 } from '../Button1';
import { ShoppingCart } from '../ShoppingCart';
import { nanoid } from 'nanoid';
import { MenuData } from '../../App';
import { Link } from 'react-router-dom';

interface Props {
  menuData: MenuData[];
  isSBOpen: boolean;
  setIsSBOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ menuData, isSBOpen, setIsSBOpen }: Props) {
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
              <li
                className={cx(styles.menuA, { [styles.active]: item.isActive })}
                key={item.id}
              >
                <Link to={item.href}>{item.name}</Link>
              </li>
              // <li key={item.id} className={cx(styles.menuLi, styles.menuLi2)}>
              //   <a
              //     className={cx(styles.menuA, { [styles.active]: item.isActive })}
              //     href={item.href}
              //   >
              //     {item.name}
              //   </a>
              // </li>
            ))}
          </ul>
          <div className={styles.buff2}></div>
          <div className={styles.shoppingCart}>
            <ShoppingCart />
          </div>
          <Button1 text='Contact Us' />
          <button
            className={styles.menuIcon}
            onClick={() => {
              setIsSBOpen(!isSBOpen);
              console.log('click');
            }}
          >
            <Menu />
          </button>
        </div>
      </Layout>
    </header>
  );
}
