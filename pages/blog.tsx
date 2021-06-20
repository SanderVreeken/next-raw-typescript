import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import articles from '../elements/articles'
import styles from '../styles/Blog.module.scss'

export default function Blog() {
    return (
        <div className={styles.blog}>
            <main>
                <Header />
                <Hero /> 
                <span>
                    <h2>The Latest Revenue Management Articles</h2>
                    <p>Discover the latest industry news, trends, tips and strategies.</p>
                    {articles.map(article => <Card article={article} />)}
                </span>
            </main>
            <Footer />
        </div>
    )
}