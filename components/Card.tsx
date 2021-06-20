import ArticleI from '../interfaces/Article'
import styles from '../styles/Card.module.scss'
import Anchor from './Anchor'

interface Props {
    article: ArticleI
}

export default function Card({ article }: Props) {
    return (
        <span className={styles.card}>
            <Anchor href='/'>
                <h3>{article.title}</h3>
            </Anchor>
            <p>{article.text}</p>
            <span>
                <button>Read more</button>
            </span>
        </span>
    )
}