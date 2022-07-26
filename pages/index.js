import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import AjbMcInput from './components/AjbMcInput';

export default function Home() {
  const [l, setL] = useState(0);
  const [w, setW] = useState(0);
  const [d, setD] = useState(3);
  const [total, setTotal] = useState(0);
  function calculateTotal(l,w,d) {
    const result = Math.floor((l * w * d) / 324);
    setTotal(result);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Mulch Calculator</title>
        <meta name="description" content="Quick and dirty mulch calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          How much mulch do you need?
        </h1>

        <div className={styles.grid}>
          <AjbMcInput label={`Total Mulch Length (feet)`} value={l} cb={(newVal) => {
            setL(newVal);
            calculateTotal(newVal, w, d);
          }}/>
          <AjbMcInput label={`Total Mulch Width (feet)`} value={w} cb={(newVal) => {
            setW(newVal);
            calculateTotal(l, newVal, d);
          }}/>
          <AjbMcInput label={`Total Mulch depth (inches)`} value={d} cb={(newVal) => {
            setD(newVal);
            calculateTotal(l, w, newVal);
          }}/>
          <p>{`You need to buy ${Math.round((total + Number.EPSILON) * 100) / 100} cu yrd (${Math.round(((total * 3) + Number.EPSILON) * 100) / 100} cu ft) of mulch.`}</p>
          <p>(l * w * d) / 324</p>
        </div>
      </main>

      <footer className={styles.footer}>
        Code can be found at <a href="https://github.com/ajbertra91/mulch-calculator" target="_blank">github.com/ajbertra91/mulch-calculator</a>
      </footer>
    </div>
  )
}
