import React from 'react';
import styles from './home.module.css';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { ReactComponent as Flame } from '../../img/flame.svg';
import { Button2 } from '../../components/Button2';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export function Home() {
  return (
    <>
      <Header />
      <section className={styles.section1}>
        <Layout>
          <div className={styles.s1Wrap}>
            <div className={styles.futureWrap}>
              <Flame />
              <span className={styles.futureSpan}>FUTURE OF eSPORTS</span>
            </div>
            <h2 className={styles.h2}>Unleash the Next Generation of Gaming</h2>
            <p className={styles.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in
              morbi pulvinar. Enim non pulvinar neque.
            </p>
            <Link to='#'>
              <Button2 name='Explore More' />
            </Link>
            <Link to='#'>
              <span className={styles.ourTeam}>View our team</span>
            </Link>
            <ul className={styles.socialUl}>
              <li className={cx(styles.socialLi, styles.mr60)}>
                <Link to='#'>FACEBOOK</Link>
              </li>
              <li className={cx(styles.socialLi, styles.mr50)}>
                <Link to='#'>INSTAGRAM</Link>
              </li>
              <li className={styles.socialLi}>
                <Link to='#'>TWITCH</Link>
              </li>
            </ul>
          </div>
        </Layout>
      </section>
      <section>
        <Layout>Секция-2</Layout>
      </section>
    </>
  );
}
