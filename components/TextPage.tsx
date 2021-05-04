import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Text from '../components/Text'
import TextI from '../interfaces/Text'
import styles from '../styles/TextPage.module.scss'

interface Props {
    text: TextI
}

export default function TextPage({ text }: Props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Text text={text} />
      </main>

      <Footer />
    </div>
  )
}
