import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from '../../styles/Service.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Revenue At Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div role='image'></div>
      </main>

      <Footer />
    </div>
  )
}
