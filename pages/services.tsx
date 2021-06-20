import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'
import styles from '../styles/Services.module.scss'

export default function Services() {
    return (
        <div className={styles.services}>
            <main>
                <Header />
                <Hero /> 
                <Products />  
            </main>
            <Footer />
        </div>
    )
}