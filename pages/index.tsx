import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Products from '../components/Products'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Introduction />
        <Products />
      </main>
      
      <Footer />
    </div>
  )
}
