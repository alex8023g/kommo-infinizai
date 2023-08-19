import React, { useState } from 'react';
import styles from './home.module.css';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { ReactComponent as Flame } from '../../img/flame.svg';
import { Button2 } from '../../components/Button2';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { SideBar } from '../../components/SideBar';
import { menuData } from '../../App';
import imgCharMin1 from '../../img/char-min-1.png';
import imgCharMin2 from '../../img/char-min-2.png';
import imgCharMin3 from '../../img/char-min-3.png';
import imgCharMin4 from '../../img/char-min-4.png';
import imgChar1 from '../../img/character-1.png';
import imgChar2 from '../../img/character-2.png';
import imgChar3 from '../../img/character-3.png';
import imgChar4 from '../../img/character-4.png';
import { nanoid } from 'nanoid';

const tabData = [
  { id: '', src: imgCharMin1 },
  { id: '', src: imgCharMin2 },
  { id: '', src: imgCharMin3 },
  { id: '', src: imgCharMin4 },
].map((item) => ({ ...item, id: nanoid() }));

const chars = [imgChar1, imgChar2, imgChar3, imgChar4];
const chars2 = ['tab1', 'tab2', 'tab3', 'tab4'];

export function Home() {
  const [isSBOpen, setIsSBOpen] = useState(false);
  const [activeChar, setActiveChar] = useState(0);
  const homeMData = menuData.map((item) =>
    item.name === 'Home' ? { ...item, isActive: true } : { ...item, isActive: false }
  );
  return (
    <>
      <Header menuData={homeMData} isSBOpen={isSBOpen} setIsSBOpen={setIsSBOpen} />
      <section className={styles.section1}>
        <Layout>
          <div className={styles.s1Wrap}>
            <div className={styles.futureWrap}>
              <Flame />
              <span className={styles.futureSpan}>FUTURE OF eSPORTS</span>
            </div>
            <h2 className={styles.s1h2}>Unleash the Next Generation of Gaming</h2>
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
        <SideBar isSBOpen={isSBOpen} menuData={homeMData} />
      </section>
      <section className={styles.section2}>
        <Layout>
          <div className={cx(styles.s2Wrap, styles[chars2[activeChar]])}>
            <div className={cx(styles.s2Empty, styles[chars2[activeChar]])}>
              {/* <img src={chars[activeChar]} alt='' /> */}
            </div>
            <div className={styles.s2Content}>
              <div className={styles.futureWrap}>
                <Flame />
                <span className={styles.futureSpan}>FUTURE OF eSPORTS</span>
              </div>
              <h2 className={styles.s2h2}>Customize your Own Character</h2>
              <p className={styles.s2p1}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi architecto beatae.
              </p>
              <ul className={styles.tabs}>
                {tabData.map(({ id, src }, i) => (
                  <li
                    key={id}
                    className={cx(styles.tab, { [styles.activeTab]: i === activeChar })}
                    onClick={() => {
                      setActiveChar(i);
                      console.log(i);
                    }}
                  >
                    <img src={src} alt='' />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Layout>
      </section>
      <section>
        <Layout>section-3</Layout>
      </section>
    </>
  );
}
