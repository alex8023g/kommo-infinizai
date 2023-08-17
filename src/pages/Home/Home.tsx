import React from 'react';
import styles from './home.module.css';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { ReactComponent as Logo } from '../../img/logo.svg';

export function Home() {
  return (
    <>
      <Header />
      <section className={styles.section1}>
        <Layout>Секция-1</Layout>
      </section>
      <section>Секция-2</section>
    </>
  );
}
