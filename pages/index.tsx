import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Products from '../components/Products'
import styles from '../styles/Home.module.scss'

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
        <Introduction />
        <Products />
      </main>

      <Footer />
    </div>
  )
}
