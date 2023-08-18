import React from 'react';
import styles from './sidebar.module.css';
import cx from 'classnames';

export function SideBar({ isSBOpen }: { isSBOpen: boolean }) {
  return (
    <div className={cx(styles.sideBar, { [styles.dpnone]: isSBOpen })}>Боковое меню</div>
  );
}
